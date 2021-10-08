#Details

1. Entry point is app.js

2. Note:
All implementation is done in appropriate collection files in collection folder which are exported to app.js and run


3. app.js Function details : = 

collection.create()
==Accepts both array of objects and single object

collection.update( having, set_data)  
==Accepts 2 objects having clause and data to set .... if advanced operations like $in ... modifications to be made to appropriate collection                                        ==file in collections folder
== eg. collection.update({a:12},{c:100})

collection.read({})      
==Accepts object with simple parameter like { propertyA: 12 }   .... if advanced operations like $in ... modifications to be made to appropriate                                    ==collection file in collections folder 
== eg. collection.read({salary:12, id:1})

collection.delete({})
==Accepts object with simple parameter like { propertyA: 12 }   .... if advanced operations like $in ... modifications to be made to appropriate                                    ==collection file in collections folder
== eg. == eg. collection.delete({a:12})


