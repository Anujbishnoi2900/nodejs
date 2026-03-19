# balance=1000

# while True:
#      print("1.Check Balance")
#      print("2.withraw Money")
#      print("3.deposit Money")
#      print("4.eixit")

#      choice=int(input("select any "))
#      if choice==4:
#             print("sucessfully exit")
#             break
     
#      if choice==1:
#             print("your balance",balance)
     
#      elif choice==2:
#             b=int(input("withdraw money"))
#             if balance<b:
#                 print("insufficent balance")
#             else: 
#                 balance-=b 
#                 print("you withdraw money is:",b,"now your balance is :", balance)

#      elif choice==3:
#             a=int(input("deposite money"))
#             balance+=a    
#             print("you deposite money is:",a,"now your balance is :", balance)
     
#      else:
#             print("Invalid choice")



# second project start


# students = {
#        "st1":{
#        "name":input("enter"),
#        "age":input("enter"),
#        "vilage":input("enter"),
#        "city":input("enter"),

#         },
#        "st2":{
#        "name":input("enter"),
#        "age":input("enter"),
#        "vilage":input("enter"),
#        "city":input("enter"),

#        },
#        "st3":{
#        "name":input("enter"),
#        "age":input("enter"),
#        "vilage":input("enter"),
#        "city":input("enter"),

#        },
#        "st4":{
#        "name":input("enter"),
#        "age":input("enter"),
#        "vilage":input("enter"),
#        "city":input("enter"),

#        },
#        "st5":{
#        "name":input("enter"),
#        "age":input("enter"),
#        "vilage":input("enter"),
#        "city":input("enter"),

#        }

# }
# print(students)

# list =[]

# for i in range(1,3):
#        st={ "name" : input("Enter name"),
#        "age" : int(input("Enter age")),
#        "city" : input("Enter city")
#        }
       
#        list.append(st)
# for i in list:
#        print(i)





# try:
#     a=int(input("enter number"))
#     b=int(input("enter number"))
#     print(a/b)
# except:
#     print("this is not diveded ")

# a=int(input("enter number"))
# b=int(input("enter number"))

# if b==0:
#     print("this is not dived")
# else:
#     print(a/b)   

# a=(input("enter number"))
# b=(input("enter number"))
# c= "coding"
# d= a+b+c
# print(d)

# def fact(n):
#     if n ==1:
#         return n
#     return n*fact(n-1)
# print(fact(5))




st=[]

def add(title, author , price ):
    st.append({"title":title, "author":author, "price":price})
def remove(title)  :
    global st
    st=[dic for dic in st: if dic[title] == title  ]  