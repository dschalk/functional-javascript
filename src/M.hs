module Main where
import Control.Monad (forever)
import Control.Monad.IO.Class (liftIO)
import qualified Data.ByteString.Lazy.Char8 as BL
import Data.String (fromString)
import Network.Wai.Application.Static (staticApp, defaultWebAppSettings, defaultFileServerSettings)
import Network.Wai.Handler.Warp (runSettings, defaultSettings)
import Network.Wai.Handler.WarpTLS (TLSSettings(..), runTLS)
import Network.Wai.Handler.WebSockets (intercept)
import qualified Network.WebSockets as WS

defaultTLS :: TLSSettings
defaultTLS = TLSSettings {certFile="cert.pem", keyFile="key.pem"}

defaultSettings 

loop :: WS.Request -> WS.WebSockets WS.Hybi10 ()
loop r' = WS.acceptRequest r' >> forever (WS.receiveData >>= liftIO . BL.writeFile "wss.png")

main :: IO ()
main = do
    print "Click the picture on this site https://localhost:9160/"
runTLS defaultTLS defaultSettings {settingsPort = 9160, settingsIntercept = intercept loop} $ staticApp (defaultFileServerSettings $ fromString ".")
