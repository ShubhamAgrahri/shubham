
def takeInput():
    start = int(input("Enter the Starting point "))
    finish = int(input("Enter the Ending point "))
    nums = [int(item) for item in input("Enter Numbers : ").split()]

    words = [item for item in input("Enter Words : ").split()]
  
    InputsForFizzBuzz = []
    InputsForFizzBuzz.append(start)
    InputsForFizzBuzz.append(finish)
    InputsForFizzBuzz.append(nums)
    InputsForFizzBuzz.append(words)
    
    return InputsForFizzBuzz


    
def fizzBuzz():
    InputsForFizzBuzz = takeInput();
    start = InputsForFizzBuzz[0]
    finish = InputsForFizzBuzz[1]
    nums = InputsForFizzBuzz[2]
    words = InputsForFizzBuzz[3]
 
 
    resultList = []
    for iterator in range(start, finish+1):
        # result+=checkDivi(iterator,nums,words)+" "
        resultValue = checkDivi(iterator,nums,words)
       
        # if iterator!=finish:
        #     result+=", "
            
            
        resultList.append(resultValue)    
    
    return resultList
    
 
 
    
def checkDivi(iterator,nums,words):
    
    out=""
    for num in range(len(nums)):
        if iterator%nums[num]==0:
            out+=words[num]+" "
    if out=="":
        return str(iterator)
        
    else:
        return out
            

def convertListAnsToStr(resultList ,finish):
    resultStr =''
    print(resultList)
    print(len(resultList))
    for i in range(len(resultList)) :
        print(i)
        resultStr+=resultList[i]+""
        if(i!=finish-1):
            resultStr+=","
        
        
        
            
            
    return resultStr        
        

def testCaseForCheckDivi():
    if("Fizz " == checkDivi(3, [3], ["Fizz"])):
        print("Test case1 for checkDivi function  passed")
    
    else :
        print("Test case1 for checkDivi function  failed ")

    if("Buzz " == checkDivi(5, [5], ["Buzz"])):
        print("Test case2 for checkDivi function  passed")
    
    else :
        print("Test case2 for checkDivi function  failed")
    if("Fizz Buzz " == checkDivi(15, [3,5], ["Fizz","Buzz"])):
        print("Test case3 for checkDivi function  passed")
    
    else :
        print("Test case3 for checkDivi function  passed")
    


def testCaseForTakeInput():
    print("Enter the input written in comment to check test cases of take input ")
    checkInputFunctionValue = takeInput()
    if(checkInputFunctionValue[0]==1 and checkInputFunctionValue[1]==100 and checkInputFunctionValue[2] == [3,5] and checkInputFunctionValue[3] == ['Fizz' ,'Buzz']):
         print('Test case1 for takeInput function  passed ')
    else :
        print('Test case1 for takeInput function Failed  ')
    
    checkInputFunctionValue = takeInput()
    if(checkInputFunctionValue[0]==5 and checkInputFunctionValue[1]==105 and checkInputFunctionValue[2] == [3,5] and checkInputFunctionValue[3] == ['Fizz' ,'Buzz']):
        print('Test case2 for takeInput function  passed ')
    else :
        print('Test case2 for takeInput function Failed  ') 
        


def testCaseForChecFizzBuzz():
    print("Enter inputs to check fizzBuzzIteration Function  ")
    re = fizzBuzz()#pass start = 1 ,finish =10 ,numbers=3 5 words = Fizz Buzz from console 
    if(re[2]=='Fizz ' and re[4]=='Buzz ' and re[8] =="Fizz " and re[9]=="Buzz "):
        print("Test case 1 for fizzBuzzIteration function passed ")
    else :
        print("Test case 1 for fizzBuzzIteration function Failed")
    
    re = fizzBuzzn()#pass start = 10 and finish 20 ,nums= 3,5 and word = Fizz Buzz as input from console 
    if(re[5]=='Fizz Buzz '):
        print("Test case 1 for fizzBuzzIteration function passed ")
    else :
        print("Test case 1 for fizzBuzzIteration function Failed")
    
    
    
    


    
    #test case use these function to check test cases 
# testCaseForCheckDivi()      
# testCaseForTakeInput()
# testCaseForCheckIterationFizzBuzz()

resultList= fizzBuzz()

#converting the list answer to string passing resul list and finish value 
resultStr = convertListAnsToStr(resultList,10)

print(resultStr)
    
    

    
    
    
    


