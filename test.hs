#!/usr/bin/env Haskell

func52 :: Integer -> Integer
func52 x = x*x*x
aag = func52 4

main = do
  print aag
  let ds = show $ func52 3 + 15
  print $ ds ++ " is the answer the sophamoric philosopher's ultimate question"
