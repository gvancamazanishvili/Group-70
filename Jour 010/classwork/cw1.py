# 1) შექმენი for loop- რომელიც გამოიტანს 1-100 ჩატვლით რიცხვებს და ასევე კენტია თუ ლუწი ეს რიცხვი.

for i in range (1, 101, 1):
    if i %2 == 0:
        print("even")
    else:
        print("odd")
    print (i)

