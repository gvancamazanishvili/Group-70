from turtle import *
# we want to paint house


# draw a square
speed(30)   
shape("turtle")

 
width(7)
color("blue")
forward(200)
left(90)     

forward(200)
left(90)

forward(200)
left(90)

forward(200)
left(90)
#  end of square

#  drawing a door

forward(70)
color("purple")
begin_fill()
left(90)
forward(120)
right(90)
forward(60)
right(90)
forward(120)
end_fill()


 #drawing roof

 
penup()  
goto(200,200)
pendown()
color("magenta")
begin_fill()
right(150)
forward(200)
left(120)
forward(200)
end_fill()


#drawing  left window


penup()
goto(25, 100)
pendown()

color("magenta")
begin_fill()

left(120)
forward(25)

left(90)
forward(40)

left(90)
forward(25)

left(90)
forward(40)
end_fill()



# drawing right window 


penup()
goto(150,100 )
pendown()

color("magenta")
begin_fill()
left(90)
forward(25)

left(90)
forward(40)

left(90)
forward(25)

left(90)
forward(40)
end_fill()



exitonclick()