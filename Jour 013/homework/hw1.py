# 1) წნევის ანალიზი: მომხმარებელი შეიყვანს ორ მაჩვენებელს: სისტოლური (systolic) და დიასტოლური (diastolic) წნევა.
# პროგრამამ უნდა განსაზღვროს წნევის კატეგორია:
# თუ სისტოლური > 140 ან დიასტოლური > 90 → "მაღალი წნევა"
# თუ სისტოლური < 90 ან დიასტოლური < 60 → "დაბალი წნევა"
# სხვა შემთხვევაში → "წნევა ნორმალურია"


systolic = int(input("enter your systolic number: "))
diastolic = int(input("enter your diastolic number: "))

if systolic > 140 or diastolic > 90:
    print("მაღალი წნევა")
elif systolic < 90 or diastolic < 60:
    print("დაბალი წნევა")
else:
    print("წნევა ნორმალურია")