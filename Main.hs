{-# LANGUAGE DataKinds, FlexibleContexts, GeneralizedNewtypeDeriving, OverloadedStrings, TemplateHaskell #-}
import           System.IO
import           Control.Concurrent             (forkIO)
import           Data.Tuple.Select
import           Data.Data
import           Data.Typeable
import           Data.Tuple.Select
import           Control.Concurrent.STM
import           Control.Concurrent.MVar (newMVar, readMVar, takeMVar, putMVar)
import           Control.Exception              (finally)
import           Control.Exception.Base         (mask_)
import           Control.Monad                  (forM_, forever)
import           Control.Monad.IO.Class         (liftIO)
import           Data.FileEmbed                 (embedDir)
import           Data.List                      (intersperse, intercalate, delete)
import           Data.List.Split                (splitOn)
import           Data.Monoid                    (mappend)
import           Data.Text                      (Text, pack, unpack)
import qualified Data.Text                      as T
import qualified Data.Text.IO                   as TIO
import           Fm                             (rText, truck)
import qualified Network.Wai
import qualified Network.Wai.Application.Static as Static
import qualified Network.Wai.Handler.Warp       as Warp
import qualified Network.Wai.Handler.WebSockets as WaiWS
import           Network.WebSockets             (sendClose)
import qualified Network.WebSockets             as WS
import           System.Directory
import           Tasks                          hiding (main)
import           Prelude as P                   hiding (readFile, writeFile, appendFile, log)
-- import System.Environment (getEnv)a
--
xcomments = "xcomments" :: FilePath
xnames = "xnames" :: FilePath
namesFile = "namesFile" :: FilePath
log = "log" :: FilePath

unify :: String -> String
unify = filter (\v -> v /= '\n')

solo :: Text
solo = "solo"

nobody :: Text
nobody = "nobody"

com = pack ","

dollar :: Text
dollar = "<$>"

empty :: Text
empty = ""

true = pack "true"
false = pack "false"

at = pack "<@>"
oh = pack "<o>"
comma = pack ", "
comma2 = pack ","
emptyText = pack ""
nl = pack "\n"
mark = pack "<$>"

type Name = Text
type Score = Int
type Goal = Int
type Group = Text
type Password = Text
type ID = Int
type Comments = Text
type Client = (Name, Score, Goal, Group, WS.Connection, Password, ID, Comments)

type ServerState = [Client]

newServerState :: ServerState
newServerState = []

toggle :: Text -> Text
toggle text | text ==true = false | text == false = true

newId :: ID
newId = 0

counter = newTVar 0

change z [a,b,c,d] = [z,b,c,d]
change _ [] = ["$","$","$","$"]
change _ _ = ["foo","bar","change()","problem"]
stringify [a,b,c,d] = "a,b,c,d"

change8 :: Text -> Text -> Client -> Client
change8 x y (a,b,c,d,e,f,g,h) | x == a = (y,b,c,d,e,f,g,h)
                              | otherwise = (a,b,c,d,e,f,g,h)

change888 :: Text -> Text -> ServerState -> ServerState
change888 x y s = map (change8 x y) s

head2 :: [Text] -> Text
head2 [a,b] = a
head2 _ = pack "Inappropriate head2 argument"

tail2 :: [Text] -> Text
tail2 [a,b] = b
tail2 _ = pack "Inappropriate tail2 argument"

head3 :: [String] -> String
head3 [a,b] = a
head3 _ = "Inappropriate head2 argument"

tail3 :: [String] -> String
tail3 [a,b] = b
tail3 _ = "Inappropriate tail2 argument"

head4 :: [Text] -> Text
head4 [] = empty
head4 xs = head xs

head5 [[(a,b,c,d,e,f,g,h)]] = [(a,b,c,d,e,f,g,h)]
head5 _ = [("a","b","c","d","e","f","g","h")]

safeTail [] = []
safeTail v  = tail v

getName = sel1

getCli name cli | sel1 cli == name  = True
                | otherwise = False


getClient name state = filter (getCli name) state

getConn = sel5

getNm id s = head [ sel1 cl | cl <- s, (sel7 cl) == id]

getN :: [Client] -> Text
getN [(a,_,_,_,_,_,_,_)] = a
getN [] = pack "Mr. Nobody"

getScore :: Client -> Score
getScore (_,b,_,_,_,_,_,_) = b

getGoal :: Client -> Goal
getGoal (_,_,c,_,_,_,_,_) = c

findGroup :: Client -> Group
findGroup (_,_,_,d,_,_,_,_) = d

-- getConn :: Client -> WS.Connection
-- getConn (_,_,_,_,e,_,_) = e

get4 :: [String] -> [Int]
get4 [_,_,_,a,b,c,d,_,_] = fmap read [a,b,c,d]
get4 _ = [-1,-1,-1,-1]

get5 :: [String] -> [Double]
get5 [_,_,_,a,b,c,d,e] = fmap read [a,b,c,d,e]
get5 _ = [-1,-1,-1,-1,-1]

get2 :: [String] -> Text
get2 [_,_,_,_,_,_,_,e,f] = T.intercalate com (fmap pack [e,f])
get2 _ = pack "error in get2"

get2G [_,_,_,_,_,_,_,e,f] = fmap read [e,f]
get2G _ = [8888, 8888]

subState :: Text -> Text -> [(Text,Int,Int,Text,WS.Connection,Text,Int,Text)] -> [(Text,Int,Int,Text,WS.Connection,Text,Int,Text)]
subState name gr state  | gr /= solo  = [ (a,b,c,d,e,f,g,h) | (a,b,c,d,e,f,g,h) <- state, gr == d ]
                        | gr == solo = [ (a,b,c,d,e,f,g,h) | (a,b,c,d,e,f,g,h) <- state, name == a]

extract :: [Text] -> Text
extract [x] = x
extract _ = mempty

getGroup name state = extract [ d | (a,_,_,d,_,_,_,_) <- state, name == a ]

content :: [String] -> String
content [] = "Empty List"
content [x] = x
content _ = "Major malfunction in the function named 'content'."

bcast :: Text -> ServerState -> IO ()
bcast message clients = do
    TIO.putStrLn message
    forM_ clients $ \(_ ,_, _, _, conn,_,_,_) -> WS.sendTextData conn message

textState s = [ a  `mappend` " | score: " `mappend` pack (show b) `mappend` " | goals: " `mappend` pack (show c) `mappend` (pack "<$!$>")  | (a,b,c,_,_,_,_,_) <- s]

extractHead :: [Text] -> Text
extractHead [a,b] = a
extractHead _ = pack "Error. ExtractHead is being applied to something other than a two item list of Text"

extractTail [a,b] = b
extractTail _ = pack "Error. ExtractTail is being applied to something other than a two item list of Text"

newName :: Text -> Text -> Client -> Client
newName name1 name2 (a, b, c, d, e, f, g, h) | name1 == a  = (name2, b, c, d, e, f, g, h)
                                             | otherwise = (a, b, c, d, e, f, g, h)

changeName :: Text -> Text -> ServerState -> ServerState
changeName name1 name2 s = map (newName name1 name2) s

newGroupKeepScore :: Text -> Text -> Client -> Client
newGroupKeepScore name group (a, b, c, d, e, f, g, h)  | name == a  = (a, b, c, group, e, f, g, h)
                                                       | otherwise = (a, b, c, d, e, f, g, h)
changeGroupKeepScore :: Text -> Text -> ServerState -> ServerState
changeGroupKeepScore name group = map (newGroupKeepScore name group)

newGroup :: Text -> Text -> Client -> Client
newGroup name group (a, b, c, d, e, f, g, h) | name == a  = (a, 0, 0, group, e, f, g, h)
                                             | otherwise = (a, b, c, d, e, f, g, h)

changeGroup :: Text -> Text -> ServerState -> ServerState
changeGroup name group = map (newGroup name group)

chg6 :: Text -> Int -> Int -> Client -> Client
chg6 x y z (a, b, c, d, e, f, g, h) | x == a    = (a, y, z, d, e, f, g, h)
                         | otherwise = (a, b, c, d, e, f, g, h)

chgScore :: Text -> Int -> Int -> ServerState -> ServerState
chgScore name k q = map (chg6 name k q)

matches :: Text -> ServerState -> [Client]
matches a ss = [ x | x <- ss, getName x == a]

clientExists :: Text -> ServerState -> Bool
clientExists a ss  | null (matches a ss)   = False
                   | otherwise             = True

matchesGroup :: Text -> ServerState -> [Client]
matchesGroup a ss = [ x | x <- ss, findGroup x == a]

groupExists :: Text -> ServerState -> Bool
groupExists a ss   | null (matchesGroup a ss) = False
                   | otherwise                = True

addClient :: Client -> ServerState -> ServerState
addClient client clients = client : clients

removeClient :: Client -> ServerState -> ServerState
removeClient name = filter ((/= getName name) . getName)

clientEq (a',b',c',d',e',f',g') a | a == a' = True
                                  | otherwise = False

rmClient :: Name -> ServerState -> ServerState
rmClient name state = do
  newState <- [ c | c <- state, (getName c) /= name]
  return newState

closeClientConn :: WS.WebSocketsData a => Client -> ServerState -> a -> ServerState
closeClientConn client s = do
    let s' = removeClient client s
    _ <- sendClose (getConn client)
    return s'

broadcast :: Text -> ServerState -> IO ()
broadcast message clients = do
    print $! "Message being broadcast: " ++ (T.unpack message)
    TIO.putStrLn message
    forM_ clients $ \(_ , _, _, _, conn,_,_,_) -> WS.sendTextData conn message

player = newTVar nobody

main :: IO ()
main = do
    -- por <- getEnv "PORT"
    -- let port = read por
    state <- atomically $ newTVar newServerState
    Warp.runSettings
     (Warp.setPort 3055 $
       Warp.setTimeout 36000
         Warp.defaultSettings) $
           WaiWS.websocketsOr WS.defaultConnectionOptions (application state) staticApp
staticApp :: Network.Wai.Application
staticApp = Static.staticApp $ Static.embeddedSettings $(embedDir "./src/dist")
application :: TVar ServerState -> WS.ServerApp
application state pending = do
    print $!  "App is fired up"
    conn <- WS.acceptRequest pending
    msg <- WS.receiveData conn
    hFlush stdout
    count <- atomically counter
    id0 <- atomically $ readTVar count
    let id = id0 + 1
    atomically $ writeTVar count id
    clients <- atomically $ readTVar state
    case msg of
        _   | not (prefix `T.isPrefixOf` msg) ->
                WS.sendTextData conn ("Wrong announcement" :: Text)
            | any ($ getName client)
                [T.null] ->
                    WS.sendTextData conn ("Name cannot be empty" :: Text)
            | clientExists (getName client) clients ->
                do
                  let duplicate = getName client
                  WS.sendTextData conn ("EE#$42,solo," `mappend` duplicate `mappend` " ,solo" :: Text)
            | otherwise -> flip finally disconnect $ do
                    let name = getName client
                    st <- atomically $ readTVar state
                    let st2 = addClient client st
                    atomically $ writeTVar state st2
                    WS.sendTextData conn ("CC#$42,solo," `mappend` name `mappend` " ,joined" :: Text)
                    talk conn state client
         where
                prefix = "CC#$42"
                namePword = T.splitOn oh $ T.drop (T.length prefix) msg
                client = (head namePword, 0, 0, solo, conn, last namePword, id, (pack "david<o>Still testing"))
                disconnect = do
                    st <- atomically $ readTVar state
                    let name = getNm id st
                    print $! T.unpack name ++ " is leaving"
                    sta <- atomically $ readTVar state
                    atomically $ writeTVar state $ filter (\v -> ((sel7 v) /= id)) sta
                    sta' <- atomically $ readTVar state  
                    let grp = getGroup name sta'
                    let subSt = subState name grp sta'
                    broadcast ("NN#$42," `mappend` grp `mappend` ",Major malfunction. I am Mr. Nobody"
                      `mappend` (pack "<br>") `mappend`
                        T.concat (intersperse "<br>" (textState subSt))) subSt   

talk :: WS.Connection -> TVar ServerState -> Client -> IO ()
talk conn state client = forever $ do
  msg <- WS.receiveData conn
  let msg2 = T.unpack msg
  let mArr = splitOn "," msg2
  print $! "In talk. The incoming message is " ++ msg2
  hFlush stdout
  let msgArray = T.splitOn "," msg
  let message = snd $ splitAt 3 msgArray
  let group = msgArray !! 1
  let sender = msgArray !! 2
  let extra = msgArray !! 3
  let extraStr = mArr !! 3
  let extra2 = msgArray !! 4
  let extra3 = msgArray !! 5
  let extraNum = read (mArr !! 3) :: Int
  let extraNum2 = read (mArr !! 4) :: Int
  print $! ("COWS AND DOGS name, score, goals");
  st <- atomically $ readTVar state
  let status = [[a,pack $ show b,pack $ show c] | (a,b,c,_,_,_,_,_) <- st]
  print $!  status
  print $! ("COWS AND DOGS --- END");
  let mes = "<><><><><> Outgoing message from Main.hs " :: Text
  let tsks = (T.unpack group) :: FilePath
  print $!  "<$><$><><@><@><> tsks"
  print $!  tsks 
  print $!  "<$><$><><@><@><> tsks"
  cos <- TIO.readFile xcomments
  comms <- atomically $ newTVar cos
  commens <- atomically $ readTVar comms
  let comments = T.replace (pack "\n") mempty commens
  ns <- TIO.readFile namesFile
  tks <- read2 tsks
  taskTVar <- atomically $ newTVar tks
  taskFile <- atomically $ readTVar taskTVar
  print $!  "<$><$><><@><@><> taskFile, taskFile == mempty, typeOf taskFile"
  print $! taskFile
  print $! show $ taskFile == mempty
  print $! typeOf taskFile
  print $!  "<$><$><><@><@><> END"
  if taskFile == mempty 
    then atomically $ writeTVar taskTVar emptyText 
    else atomically $ writeTVar taskTVar taskFile
     
  if "CA#$42" `T.isPrefixOf` msg
     then
         do
             old <- atomically $ readTVar state
             let status = [[a,pack $ show b,pack $ show c] | (a,b,c,_,_,_,_,_) <- st]
             print $!  status
             print $! ("GIRLS AND DOGS --- END");
             let new = chgScore sender (read (mArr !! 7)) (read (mArr !! 8)) old
             atomically $ writeTVar state new
             let subSt = subState sender group new
             broadcast ("NN#$42," `mappend` group `mappend` "," `mappend` sender `mappend` ","  `mappend` T.concat (textState subSt)) subSt
             z <- rText $ get4 mArr
             let x = get2 mArr
             print $! show z
             print $! show x
             print $! ("GIRLS AND DOGS CA#$53 -> name, score, goals");
             st <- atomically $ readTVar state
             let status = [[a,pack $ show b,pack $ show c] | (a,b,c,_,_,_,_,_) <- st]
             print $!  status
             print $! ("GIRLS AND DOGS --- END");
             broadcast ("CA#$42," `mappend` group `mappend` "," `mappend` sender `mappend` "," `mappend` z `mappend` "," `mappend` x ) subSt

-- ********************** Comments are maintained in a file and in a TVar ****** START

     else if "GZ#$42" `T.isPrefixOf` msg               -- FETCH AND BROADCAST ALL COMMENTS
        then                                           -- PERFORM ON LOAD
            do
                st <- atomically $ readTVar state
                broadcast ("GZ#$42," `mappend` group `mappend` "," 
                    `mappend` sender `mappend` "," `mappend` comments) st

     else if "GN#$42" `T.isPrefixOf` msg -- RECEIVE A NEW COMMENT, UPDATE THE FILE AND THE TVAR,
                                         --  AND BROADCAST THE NEW COMMENT 
        then
            do
                old <- atomically $ readTVar comms
                TIO.writeFile xcomments (old `mappend` extra )
                atomically $ writeTVar comms $ old `mappend` extra
                st <- atomically $ readTVar state
                broadcast ("GN#$42," `mappend` group `mappend` ","
                    `mappend` sender `mappend` "," `mappend` extra `mappend` at) st

     else if "GD#$42" `T.isPrefixOf` msg              -- DELETE A COMMENT
        then
            do
                a <- TIO.readFile xcomments
                let b = T.replace extra2 mempty a
                TIO.writeFile xcomments b
                st <- atomically $ readTVar state
                broadcast ("GD#$42," `mappend` group `mappend` ","
                    `mappend` sender `mappend` "," `mappend` extra) st
                    
     else if "GE#$42" `T.isPrefixOf` msg              -- EDIT A COMMENT
        then
            do
                xcomms <- TIO.readFile xcomments
                let txt = T.replace extra2 extra3 xcomms
                print ">>>>>>>>>>>>>>>>>> extra, extra2, extra3, txt in GE:"
                print extra
                print extra2
                print extra3
                print txt
                TIO.writeFile xcomments txt
                atomically $ writeTVar comms txt
                st <- atomically $ readTVar state
                broadcast ("GE#$42," `mappend` group `mappend` com
                  `mappend` sender `mappend` com `mappend` extra `mappend` com
                     `mappend` extra3) st
-- ********************** Comments are maintained in a file and in a TVar ****** END
   
     else if "RR#$42" `T.isPrefixOf` msg              -- Name and password change
       then
         do
           coms1 <- TIO.readFile xcomments
           let name_pw = T.splitOn (T.pack "<o>") extra
           let nm = head2 name_pw
           nams <- read2 namesFile
           let namses = T.splitOn (T.pack "<&>") nams
           let nmAr = map (T.splitOn (T.pack "<o>")) namses
           let pw = extractTail name_pw
           print "nm and pw"
           print nm
           print pw
           let namses = T.splitOn (T.pack "<&>") nams
           let res_1 = show (extra `elem` namses)
           let nmAr = map (T.splitOn (T.pack "<o>")) namses
           let namesAr = map head2 nmAr
          -- let namAr = filter (/= (T.pack "\n")) namesAr 
           let namAr = filter (/= (T.pack "\n")) (concat nmAr) 
           let res_2 = show (nm `elem` namesAr)
           print "res_1  res_2" 
           print res_1
           print res_2 
           st <- atomically $ readTVar state
           let names = [a | (a,_,_,_,_,_,_,_) <- st]
           print "In RR before the if blocks --- names are"
           print names
           if res_1 == "True" && res_2 == "True"
             then
               do
                 print "True True in RR#$42. A recognized name/password combination was entered"
                 st <- atomically $ readTVar state
                 let names = [a | (a,_,_,_,_,_,_,_) <- st]
                 print "In RR again. In the res_1 == True block --- names are"
                 print names

                 s <- atomically $ readTVar state
                 let (a,b,c,d,e,f,g,h) = head (getClient sender s)
                 let new = (nm,b,c,d,e,pw,g,h):s 
                 st <- atomically $ readTVar state
                 atomically $ writeTVar state new

                 st' <- atomically $ readTVar state
                 atomically $ writeTVar state $ filter (\v -> not ((sel1 v) == sender)) st'

                 let names = [a | (a,_,_,_,_,_,_,_) <- new]
                 print "In RR --- names are"
                 print names

                 let subSt = subState sender group new
                 broadcast ("NN#$42," `mappend` group `mappend` "," `mappend` nm `mappend` ","
                     `mappend` (T.pack "<br>") `mappend` T.concat (intersperse "<br>" (textState subSt))) subSt

                 broadcast ("RR#$42," `mappend` group `mappend` "," `mappend` sender
                   `mappend` "," `mappend` nm `mappend` "," `mappend` (T.pack "code1")) subSt
             else
               print "Not previously registered"
           if (res_1 == "False" && res_2 == "False")                 -- A new name will be registered
             then
               do
                 st <- atomically $ readTVar state
                 print "length five times"
                 print $ length st
                 let names = [a | (a,_,_,_,_,_,_,_) <- st]
                 print "In RR again. In False, False --- names are"
                 print names
                 print $ length st
         
                 Tasks.append namesFile (extra `mappend` (T.pack "<&>"))
                 
                 s <- atomically $ readTVar state
                 let (a,b,c,d,e,f,g,h) = head (getClient sender s)
                 let new = (nm,b,c,d,e,pw,g,h):s 
                 st <- atomically $ readTVar state
                 atomically $ writeTVar state new

                 print $ length st
                 st' <- atomically $ readTVar state
                 atomically $ writeTVar state $ filter (\v -> not ((sel1 v) == sender)) st'

                 print $ length st
                {- old <- atomically $ readTVar stater
                 let new = changeName sender nm pw old
                 atomically $ writeTVar state new 

                 let subSt = subState nm group new
                 broadcast ("NN#$42," `mappend` group `mappend` "," `mappend` sender `mappend` "," `mappend` 
                  (T.pack "<br>") `mappend` T.concat (intersperse "<br>" (textState subSt))) subSt
                 print "False False in RR#$42. New username:"
                 print nm   -}
                 
                 st <- atomically $ readTVar state
                 let names = [a | (a,_,_,_,_,_,_,_) <- st]
                 print "In RR --- names are"
                 print names

                 print $ length st

                 let subSt = subState sender group new
                 broadcast ("NN#$42," `mappend` group `mappend` "," `mappend` nm `mappend` ","
                     `mappend` (T.pack "<br>") `mappend` T.concat (intersperse "<br>" (textState subSt))) subSt

                 let names = [a | (a,_,_,_,_,_,_,_) <- st]
                 broadcast ("RR#$42," `mappend` group `mappend` "," `mappend` nm
                  `mappend` "," `mappend` nm `mappend` "," `mappend` (T.pack "code2")) subSt
             else print "The name is already taken"      
           if (res_1 == "False" && res_2 == "True")                 -- A new name will be registered
             then
                do
                  print "False True. The password does not match the registered password"
                  print "In RR#$42, third if block."
                  st <- atomically $ readTVar state
                  let sb = subState sender group st
                  let subSt = subState sender group st
                  broadcast ("NN#$42," `mappend` group `mappend` "," `mappend` sender `mappend` ","
                   `mappend` (T.pack "<br>") `mappend` T.concat (intersperse "<br>" (textState subSt))) subSt
                  broadcast ("RR#$42," `mappend` group `mappend` "," `mappend` sender
                   `mappend` "," `mappend` sender `mappend` "," `mappend` (T.pack "code3")) subSt
             else print "Confirming False False"

                    




-- ******************************** Comments are maintained in a file and in a TVar ****** START
 
     else if "CE#$42" `T.isPrefixOf` msg ||
        "CH#$42" `T.isPrefixOf` msg || "XY#$42" `T.isPrefixOf` msg ||
        "DE#$42" `T.isPrefixOf` msg || "EQ#$42" `T.isPrefixOf` msg ||
        "GQ#$42" `T.isPrefixOf` msg || "CF#$42" `T.isPrefixOf` msg ||
        "CY#$42" `T.isPrefixOf` msg || "CR#$42" `T.isPrefixOf` msg || "CD#$42" `T.isPrefixOf` msg ||
        "IA#$42" `T.isPrefixOf` msg || "DY#$42" `T.isPrefixOf` msg
        then
            do
                st <- atomically $ readTVar state
                let subSt = subState sender group st
                broadcast msg subSt
                print $! mes `mappend` msg
                let names = [a | (a,_,_,_,_,_,_,_) <- st]
                print $!  "Here are the names which are currently being served"
                mapM_ print $!  names

     else if "CO#$42" `T.isPrefixOf` msg
        then
            mask_ $ do
                old <- atomically $ readTVar state
                let new = chgScore sender 0 0 old
                atomically $ writeTVar state new
                let new2 = changeGroup sender extra new
                atomically $ writeTVar state new2
                st <- atomically $ readTVar state
                let status = [[a,pack $ show b,pack $ show c] | (a,b,c,_,_,_,_,_) <- st]
                print $!  status
                let subSt = subState sender extra new2
                broadcast ("NN#$42," `mappend` group `mappend` "," `mappend` sender `mappend` "," `mappend` T.concat (textState subSt)) subSt

     else if "XX#$42" `T.isPrefixOf` msg
        then
            mask_ $ do
                s <- atomically $ readTVar state
                let new = filter (\(a,_,_,_,_,_,_,_) -> a == sender) s
                atomically $ writeTVar state new

     else if "CG#$42" `T.isPrefixOf` msg
        then
            mask_ $ do
                old <- atomically $ readTVar state
                st <- atomically $ readTVar state
                let status = [[a,pack $ show b,pack $ show c] | (a,b,c,_,_,_,_,_) <- st]
                print $!  status
                let new = chgScore sender extraNum extraNum2 old
                atomically $ writeTVar state new
                let subSt = subState sender group new
                st <- atomically $ readTVar state
                let status = [[a,pack $ show b,pack $ show c] | (a,b,c,_,_,_,_,_) <- st]
                print $!  status
                broadcast ("NN#$42," `mappend` group `mappend` "," `mappend` sender `mappend` "," `mappend` T.concat (textState subSt)) subSt

-- ****************************************** TASKS

     else if "TI#$42" `T.isPrefixOf` msg  -- send the tasks when someone changes group.
        then
            do
                st <- atomically $ readTVar state
                let subSt = subState sender group st
                let tFile = T.replace nl mempty taskFile
                let tkFile = T.replace (pack "<@><@>") at tFile
                save tsks tkFile
                atomically $ writeTVar taskTVar tkFile
                broadcast ("TI#$42," `mappend` group `mappend` ","
                    `mappend` sender `mappend` com `mappend` tkFile) subSt

     else if "TA#$42" `T.isPrefixOf` msg  -- add a new task
        then
            do
                st <- atomically $ readTVar state
                let subSt = subState sender group st
                let w = taskFile `mappend` extra
                let z = T.replace nl mempty w
                let x = T.replace (pack "<@><@>") at z
                save tsks x
                atomically $ writeTVar taskTVar x
                broadcast ("TA#$42," `mappend` group `mappend` com
                    `mappend` sender `mappend` com `mappend` extra) subSt
                    

     else if "TE#$42" `T.isPrefixOf` msg          -- edit a task
        then
            do
                let txt = T.replace extra2 extra3 taskFile
                save tsks txt
                atomically $ writeTVar taskTVar txt
                let subSt = subState sender group st
                broadcast ("TE#$42," `mappend` group `mappend` com
                  `mappend` sender `mappend` com `mappend` extra `mappend` com 
                      `mappend` extra3) subSt

     else if "TT#$42" `T.isPrefixOf` msg   -- toggle the checkbox 
        then
            do
                st <- atomically $ readTVar state
                let subSt = subState sender group st
                let txt = T.replace extra2 extra3 taskFile
                save tsks txt
                atomically $ writeTVar taskTVar txt
                broadcast ("TT#$42," `mappend` group `mappend` ","
                    `mappend` sender `mappend` "," `mappend` extra) subSt
                
                
               {- 
                let pair = splitAt extraNum (T.splitOn at taskFile)
                let txt = P.head (snd pair)
                let list2 = T.splitOn (pack "<%>") txt
                print $!  "**<*><*><*><@#$%$#@><*><*><*>** txt and list2 >>>>>"
                print $!  txt
                print $!  list2
                print $!  "**<*><*><*><@#$%$#@><*><*><*>** txt and list2 >>>>>"
                let bool |(list2 !! 1) == true = false 
                         | otherwise = true
                
                print $!  "00<*><*><*><@#$%$#@><*><*><*>00 txt, list2, and bool >>>>>"
                print $!  txt
                print $!  list2
                print $!  bool
                print $!  "00<*><*><*><@#$%$#@><*><*><*>00 txt, list2, and bool >>>>>"
                let list3 = [list2 !! 0, bool, list2 !! 2, list2 !! 3]
                let txt2 = T.intercalate (pack "<%>") list3
                let list4 = (fst pair) ++ txt2:(drop 1 (snd pair))
                let taskList = T.intercalate at list4
                atomically $ writeTVar taskTVar taskList
                save tsks taskList  -}
 
     else if "TX#$42" `T.isPrefixOf` msg  -- Delete a task
        then
            do
                let txt = T.replace extra2 mempty taskFile
                print txt
                save tsks txt
                atomically $ writeTVar taskTVar txt
                let subSt = subState sender group st
                broadcast ("TX#$42," `mappend` group `mappend` com
                  `mappend` sender `mappend` com `mappend` extra) subSt



    else do
        print $!  "*********************************************************"
        print $!  "Message fell through to the bottom in Main.hs"
        print $!  msg
        st <- atomically $ readTVar state
        print $!  "length of ServerState: "
        print $!  (length st);
        let names = [a | (a,_,_,_,_,_,_,_) <- st]
        print $!  "Here are the names which are currently being served"
        mapM_ print $!  names
        print $!  "<@><#><$><#><@>"
        old <- atomically $ readTVar state
        let new = old
        atomically $ writeTVar state new
        print $!  "*********************************************************"

