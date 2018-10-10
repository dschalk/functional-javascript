
is_prime :: Int -> Bool
is_prime 1 = False
is_prime 2 = True
is_prime n | (length [x | x <- [2 .. n-1], mod n x == 0]) > 0 = False
          | otherwise = True

primesR :: Integral a => a -> a -> [a]
primesR a b = takeWhile (<= b) $ dropWhile (< a) $ sieve [2..]
  where sieve (n:ns) = n:sieve [ m | m <- ns, m `mod` n /= 0 ]

gb n = [(x,y) | x <- primesR 2 (n-1),
          let y = n-x, is_prime y, y <= x]

main = print $ gb 62


