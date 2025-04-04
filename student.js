class student {
    name;
    std;
    age ;
    location;
    gender;

    constructor (name, std, age, gender,location){

        this.name = this.formatting(name);
        this.std = this.formatting(std);
        this.age = this.validateAge(age);
        this.location = this.formatting(location);
        this.gender = this.formatting(gender);

    }

    validateAge(age){
        
        if(!age || age <= 0 || isNaN(age)){
            alert("Enter a valid age!");
            return null;
        }
        return age;
    }

    formatting(stringVal){
        if(!stringVal || stringVal.trim() === ""){
            alert("Enter a valid value!");
            return null;
        }

        return stringVal.trim().charAt(0).toUpperCase() + stringVal.trim().slice(1).toLowerCase();
    }

    displayStudent(){
        console.log("Name :"+this.name +"\n Age: "+this.age+"\n Gender: "+this.gender+
            "\n std: "+this.std+"\n location : "+this.location
        );
    }
    editStudent(key, newValue){
        if(confirm("Are you sure you want to edit the student's "+key+"?" )){
            if(key in this){
                this[key] = key === "age" ? this.validateAge(newValue) : this.formatting(newValue);
            } else {
                alert("Invalid Parameter!");
                return null;
            }
        }
    }

    deleteStudent(){
        if(confirm("Are you sure you want to delete the student?")){
        this.name = null;
        this.age = null;
        this.gender = null;
        this.std = null;
        this.location = null;
        }
    }
}