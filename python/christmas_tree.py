def tree_body():
    for i in range(6):
        for j in range( 6 - i):
            print(' ', end='')
        for k in range(i * 2 + 1):
            print('^',end='')
        print()
        
tree_body()

def tree_bottom():
    for i in range(0, 2):
        print(((' ')*5) + (('*')*3) + ((' ')*5))

tree_bottom()