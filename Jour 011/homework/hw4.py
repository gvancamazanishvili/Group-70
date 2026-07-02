# 4) მომხმარებელი შეიყვანს ორ რიცხვს და ოპერაციას (+, -, *, /)
# დაბეჭდე შედეგი შესაბამისი მოქმედებით.
# თუ ოპერაცია არასწორია (მაგ 0-ს გაყოფა ან ტექსტი ან უცხო სიმბოლო) → "არასწორი ოპერაცია!"


num1  = int(input(" enter your first number: "))
num2 = int(input(" enter your second number: "))
operation = input("enter yout operation:")


if num1 == 0 or num2 == 0:
    print("არასწორი ოპერაცია!")

elif operation == "+":
    print(num1 + num2)
elif operation == "-":
    print(num1 - num2)
elif operation == "*":
    print(num1 * num2)
elif operation == "/":
    print(num1 / num2)

else:
    print("არასწორი ოპერაცია!")