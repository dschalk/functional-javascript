module Paths_monads_in_javascript (
    version,
    getBinDir, getLibDir, getDataDir, getLibexecDir,
    getDataFileName, getSysconfDir
  ) where

import qualified Control.Exception as Exception
import Data.Version (Version(..))
import System.Environment (getEnv)
import Prelude

catchIO :: IO a -> (Exception.IOException -> IO a) -> IO a
catchIO = Exception.catch

version :: Version
version = Version [0,1,0,0] []
bindir, libdir, datadir, libexecdir, sysconfdir :: FilePath

bindir     = "/home/e/.cabal/bin"
libdir     = "/home/e/.cabal/lib/x86_64-linux-ghc-8.0.1/monads-in-javascript-0.1.0.0-G4NMP1zs7gCKhNASfQOcGu"
datadir    = "/home/e/.cabal/share/x86_64-linux-ghc-8.0.1/monads-in-javascript-0.1.0.0"
libexecdir = "/home/e/.cabal/libexec"
sysconfdir = "/home/e/.cabal/etc"

getBinDir, getLibDir, getDataDir, getLibexecDir, getSysconfDir :: IO FilePath
getBinDir = catchIO (getEnv "monads_in_javascript_bindir") (\_ -> return bindir)
getLibDir = catchIO (getEnv "monads_in_javascript_libdir") (\_ -> return libdir)
getDataDir = catchIO (getEnv "monads_in_javascript_datadir") (\_ -> return datadir)
getLibexecDir = catchIO (getEnv "monads_in_javascript_libexecdir") (\_ -> return libexecdir)
getSysconfDir = catchIO (getEnv "monads_in_javascript_sysconfdir") (\_ -> return sysconfdir)

getDataFileName :: FilePath -> IO FilePath
getDataFileName name = do
  dir <- getDataDir
  return (dir ++ "/" ++ name)
