{-# LANGUAGE DataKinds, FlexibleContexts, GeneralizedNewtypeDeriving, OverloadedStrings, TemplateHaskell #-}

 module Lib where
     
 import Data.List
 import Data.Tuple
 import Data.Ord
 import Control.Applicative

 factors :: Int -> [Int]
 factors 0 = [0] 
 factors x = filter ((0 ==) . mod x) [1..x]

 isPrime :: Int -> Bool
 isPrime x = [1, x] == factors x
 
 myGCDHelper :: Int -> Int -> Int
 myGCDHelper a 0 = a
 myGCDHelper a b = myGCD b (a `mod` b)

 myGCD :: Int -> Int -> Int
 myGCD m n = myGCDHelper (max m n) (min m n)

 coprime :: Int -> Int -> Bool
 coprime m n = 1 == gcd m n

 totient :: Int -> Int
 totient n = length $ filter (coprime n) [1..n]
 
 primeFactors :: Int -> [Int]
 primeFactors 1 = []
 primeFactors n = if isPrime n 
                  then [n]
                  else let m = (factors n) !! 1
                       in (primeFactors m) ++ (primeFactors (n `div` m))
 
 primesR :: Int -> Int -> [Int]
 primesR a b = filter isPrime [a..b]

 goldbach :: Int -> (Int, Int)
 goldbach n = let primes = primesR 1 n
                  el = find (\x -> (n - x) `elem` primes) primes
              in case el of 
                    Just m -> (m, n - m)
                    Nothing -> (0, 0)

 goldbachList :: Int -> Int -> [(Int, Int)]
 goldbachList a b = map goldbach $ filter even [a..b]

 goldbachList' :: Int -> Int -> Int -> [(Int, Int)]
 goldbachList' a b n = filter (\(x, y) -> (min x y) > n) $ map goldbach $ filter even [a..b]

 main = print $ totient 42
