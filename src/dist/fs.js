var fs;
exports = fs = {
    read: (filename, cb, err) => {
      navigator.webkitPersistentStorage.requestQuota(0, (bytes) => {
        window.webkitRequestFileSystem(PERSISTENT, bytes, (fs) => {
          fs.root.getFile(filename, {},
            (entry) => {
              entry.file((file) => {
                var reader = new FileReader();
                if(err)
                  reader.onerror = err;
                if(cb) 
                  reader.onloadend = (e) => {
                   cb(e.target.result);
                 }
                 reader.readAsText(file);
               });
            });
        });
      });
    },
    
    write: (filename, blob, cb, err) => {
      navigator.webkitPersistentStorage.requestQuota(blob.size, (bytes) => {
        window.webkitRequestFileSystem(PERSISTENT, bytes, (fs) => {
          fs.root.getFile(filename, {create:true, exclusive:false},
            (entry) => {
              entry.file((file) => {
                if(blob.size < file.size) {
                  entry.createWriter((writer) => {
                    writer.onwriteend = (e) => {
                      writer.onwriteend = null;
                      if(cb) writer.onwriteend = cb;
                      if(err) writer.onerror = err;
                      writer.write(blob);
                    }
                    
                    writer.truncate(blob.size);
                  });
                  
                } else {
                  entry.createWriter((writer) => {
                    if(cb) writer.onwriteend = cb;
                    if(err) writer.onerror = err;
                    writer.write(blob);
                  });
                }
              });
            });
        });
      })
    },

    writeContent: (filename, content, type, cb, err) => {
      var blob = new Blob([content], {type: type});
      fs.write(filename, blob, cb, err);
    },

    writeText: (filename, text, cb, err) => {
      fs.writeContent(filename, text, "text/plain", cb, err);
    }
  }
