# 5) შეამოწმეთ რესურსებში ჩაგდებული სურათი და მის მიხედვით დაწერეთ კომენტარებად ან პრეზენტაციაში მოქმედედების თანმიმდევრობა და საბოლოო პასუხი, ასევე როგორც ნამდვილი პითონის კოდი (შექმენით a,b,c ცვლადები, შექმენით result_0, result_1, result_2 ცვლადები და შეინახეთ თითოეულში შესაბამისი მნიშვნელობა და გამოპრინტეთ).  
# && - and
# ||  -  or 
a = True
b = True 
c = False


# 1) (A&&!B)||(B&&!A)
result_0 = (a and not b) or (b and not a)

# 2) (B&&C)&&(A||B)
result_1 = (b and c) and (a or b)

# 3) (A&&!C)||(B&&!A)||(B&&!C)
result_2 = (a and not c) or (b and not a) or (b and not c)


print(result_0)
print(result_1)
print(result_2)