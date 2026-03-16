
# while True:
    
#     print("\n1. Add")
#     print("2. Multiply")
#     print("3. Subtract")
#     print("4. Divide")
#     print("5. Exit")

#     choice = int(input("Enter choice: "))

#     if choice == 5:
#         print("Program End")
#         break

#     a = int(input("Enter first number: "))
#     b = int(input("Enter second number: "))

#     if choice == 1:
#         print("Result:", a + b)

#     elif choice == 2:
#         print("Result:", a * b)

#     elif choice == 3:
#         print("Result:", a - b)

#     elif choice == 4:
#         print("Result:", a / b)

#     else:
#         print("Invalid choice")





while True:
     balance =1000
    
     print("\n1. Pin")
     print("2. balance")
     print("3. deposit")
     print("4. withdraw")
     print("5. Exit")

     choice = int(input("Enter choice: "))

     if choice == 5:
         print("Program End")
         break
     

     if choice == 1:
         print("Result:", a + b)

     elif choice == 2:
         print("This is your balance",balance)

     elif choice == 3:
         b = int(input("Enter deposit amount: "))
         balance+=b
         print("deposit:",  balance)

     elif choice == 4:
         b = int(input("Enter withraw amount: "))
         balance+=b
         print("withdraw:", balance)

     else:
         print("Invalid choice")















# prime= int(input("enter"))
# for i in range(2,prime):
#     if prime % i == 0 :
#          print(" not prime number  ")
#          break
# else:
#     print("prime ")
        