  /*
    Objects
  */

  // function GenerateRandomNum( q ){
  //   return Math.floor( Math.random() * q);
  // }

  function GenerateMyObject( name ){

    // public methods and variables      
      this.name = name;
      this.doSmsng = function(){
        defaultPopulation++;
        console.log('defaultPopulation:', defaultPopulation );
      };

      this.showDefaultPopulation = function(){
        console.log( defaultPopulation * 10);
      }
      this.population = GenerateRandomNum(10000);

      this.publicMethod = function( arg ){
        if( arg === true){
          privateMethod();
          console.log('after', this.name);
        } else {
          console.warn('YOU NOT ALLOWED TO USE THIS METHOD');
        }
      };

    // private methods and variables

    const privateMethod = () => {
      console.log('before:', this);
      this.name = "new Name!";
    }

    // function privateMethod() {
    //   console.log('before', this);
    //   this.name = "new Name!";
    // }

    let defaultPopulation = 0;
  }

  var obj = new GenerateMyObject('Dexter');
  console.log( obj.defaultPopulation );

  obj.publicMethod( true );
  obj.publicMethod();
  obj.doSmsng();

  console.log( obj );

