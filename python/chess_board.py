def chess_board():
    black = " x "
    white = " o "
    for line in range(4):
        print((black + white) * 4)
        print((white + black) * 4)
        
chess_board()