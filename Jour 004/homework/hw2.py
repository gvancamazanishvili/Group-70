# 2) მომხმარებელს შემოატანინეთ ორი რიცხვითი მნიშვნელობა (სიგანე და სიმაღლე). ტერმინალში გამოიტანეთ ფართობი/პერიმეტრი. S = ფართობი (S = width*height)/P = პერიმეტრი (P = (width+height)*2

width = float(input("enter a number"))
height = float(input("enter a number"))

P = ((width + height) * 2)
S = ((width * height )/ P)

print (f"P = პერიმეტრი {P}")
print (f"S = ფართობი {S}")


