import React,{useState} from 'react';
import './css/Form.css';
import html2canvas from 'html2canvas';
function Forming(props) {

  
  const [status,setStatus] = useState('');
  
  function completeForm(e){
    const inputs = [...e.target.form.elements];
    setStatus('initial');
    for(let j = 1; j<21; j++)
        if(inputs[j] === ''){
          setStatus('');
          break;
        }  
  }
    
  function handleChange(e){
    e.preventDefault();
    if(status === 'initial'){
      const inputs = [...e.target.elements];
      
      for(let k = 1; k <21;k++)
        inputs[k].disabled = true;

      setStatus('complete');
      props.fill({
        answer1: e.target.elements.answer1.value,
        answer2: e.target.elements.answer2.value,
        answer3: e.target.elements.answer3.value,
        answer4: e.target.elements.answer4.value,
        answer5: e.target.elements.answer5.value,
        answer6: e.target.elements.answer6.value,
        answer7: e.target.elements.answer7.value,
        answer8: e.target.elements.answer8.value,
        answer9: e.target.elements.answer9.value,
        answer10: e.target.elements.answer10.value,
        answer11: e.target.elements.answer11.value,
        answer12: e.target.elements.answer12.value,
        answer13: e.target.elements.answer13.value,
        answer14: e.target.elements.answer14.value,
        answer15: e.target.elements.answer15.value,
        answer16: e.target.elements.answer16.value,
        answer17: e.target.elements.answer17.value,
        answer18: e.target.elements.answer18.value,
        answer19: e.target.elements.answer19.value,
        answer20: e.target.elements.answer20.value,
      });
    }
    else
      alert('There are empty inputs');
  }
  function Reset(e){
    e.target.form.reset();
    let emptyObj = {}
    for(let i = 0; i<20; i++)
      emptyObj[`answer${i+1}`] = '';
    props.fill(emptyObj);

    const inputs = [...e.target.form.elements];
    for(let n=1;n<21;n++)
      inputs[n].disabled = false;
    setStatus('initial');
  }
  
  function Randomize(e){
      let optionsRange = 5;
      const possibleAnswers = [
        ['Lasker','Sazoo','Bagira','Mufasa','Gary'],
        ['angry','happy','chubby','funny','sexy'],
        ['Dog','Cat','Rabbit','Snake','Hen'],
        ['Monti’s','Levi’s','Don’s','Yvone’s','Rambo’s'],
        ['Desk','Chair','Sofa','Bar table','Pool table'],
        ['Cute','Big','Fluffy','Awesome','Fat'],
        ['Run','Jump','Swim','Sleep','Fly'],
        ['Roll','Eat','Play','Paint','Cook'],
        ['Baby shark','La vaca lola','Movimiento Naranja song','Despacito','Dame tu cosita'],
        ['Sausage','Pepperoni','Salami','Ham','Chorizo'],
        ['Garden','Hallway','Office','Living room','Ground'],
        ['Dangerous','Old','Black','White','Dirty'],
        ['Lion','Tiger','Jaguar','Crocodile','Elephant'],
        ['Disgusting','Noisy','Nervous','Lazy','Small'],
        ['Hamster','Guinea Pig','Rabbit','Rat','Chinchilla'],
        ['Pancho','Chuleta','Chilaquil','Chief','Milaneso'],
        ['Iron','Washing machine','Dryer','Stove','Microwave'],
        ['My mom','My dad','My brother','My sister','Your ex-girlfriend/boyfriend'],
        ['Baloo','Scooby Doo','Timon','Pumba','Simba'],
        ['Ugly','Tiny','Sick','Wet','Sad']];

      let newValues = {};
      for(let i = 0; i<20; i++){
        let randomValue = Math.floor(Math.random()*optionsRange);
        newValues[`answer${i+1}`] = possibleAnswers[i][randomValue];
      }
      props.fill(newValues);
  }

  function Print(){
    html2canvas(document.body).then(function(canvas) {
        saveAs(canvas.toDataURL(),'file-name.png');
    });
  }

  function saveAs(uri,filename){
    let link = document.createElement('a');

    if (typeof link.download === 'string') {

        link.href = uri;
        link.download = filename;

        //Firefox requires the link to be in the body
        document.body.appendChild(link);

        //simulate click
        link.click();

        //remove the link when done
        document.body.removeChild(link);
      } 
    else
        window.open(uri);
  }

  return (
    <form onSubmit={handleChange}>
      <fieldset className="form-container">  
        <legend>Fill in the blanks</legend>

        <div className="inputs">
          {/* <div className="left"> */}
            <div>
              <label htmlFor="answer1"> 1) pet name </label>
              <input type="text" name="" id="answer1" onChange={completeForm}/>
            </div>
      
            <div>
              <label htmlFor="answer2"> 2) adjective </label>
              <input type="text" name="" id="answer2" onChange={completeForm}/>
            </div>
            
            <div>
              <label htmlFor="answer3"> 3) animal </label>
              <input type="text" name="" id="answer3" onChange={completeForm}/>
            </div>
      
            <div>
              <label htmlFor="answer4"> 4) mean person's name </label>
              <input type="text" name="" id="answer4" onChange={completeForm}/>
            </div>
      
            <div>
              <label htmlFor="answer5"> 5) item of furniture </label>
              <input type="text" name="" id="answer5" onChange={completeForm}/>
            </div>
      
            <div>
              <label htmlFor="answer6"> 6) adjective </label>
              <input type="text" name="" id="answer6" onChange={completeForm}/>
            </div>
      
            <div>
              <label htmlFor="answer7"> 7) verb </label>
              <input type="text" name="" id="answer7" onChange={completeForm}/>
            </div>
      
            <div>
              <label htmlFor="answer8"> 8) verb </label>
              <input type="text" name="" id="answer8" onChange={completeForm}/>
            </div>
      
            <div>
              <label htmlFor="answer9"> 9) song you don't like </label>
              <input type="text" name="" id="answer9" onChange={completeForm}/>
            </div>
      
            <div>
              <label htmlFor="answer10"> 10) kind of lunch meat </label>
              <input type="text" name="" id="answer10" onChange={completeForm}/>
            </div>  
          {/* </div> */}
    
          {/* <div className="right"> */}
            <div>
              <label htmlFor="answer11"> 11) noun </label>
              <input type="text" name="" id="answer11" onChange={completeForm}/>
            </div>
      
            <div>
              <label htmlFor="answer12"> 12) adjective </label>
              <input type="text" name="" id="answer12" onChange={completeForm}/>
            </div>
      
            <div>
              <label htmlFor="answer13"> 13) jungle animal </label>
              <input type="text" name="" id="answer13" onChange={completeForm}/>
            </div>
      
            <div>
              <label htmlFor="answer14"> 14) adjective </label>
              <input type="text" name="" id="answer14" onChange={completeForm}/>
            </div>
      
            <div>
              <label htmlFor="answer15"> 15) type of small pet</label>
              <input type="text" name="" id="answer15" onChange={completeForm}/>
            </div>
      
            <div>
              <label htmlFor="answer16"> 16) name of pet</label>
              <input type="text" name="" id="answer16" onChange={completeForm}/>
            </div>
      
            <div>
              <label htmlFor="answer17"> 17) household object</label>
              <input type="text" name="" id="answer17" onChange={completeForm}/>
            </div>
      
            <div>
              <label htmlFor="answer18"> 18) person who regularly visit you</label>
              <input type="text" name="" id="answer18" onChange={completeForm}/>
            </div>
      
            <div>
              <label htmlFor="answer19"> 19) name of famous animal </label>
              <input type="text" name="" id="answer19" onChange={completeForm}/>
            </div>
      
            <div>
              <label htmlFor="answer20"> 20) adjective </label>
              <input type="text" name="" id="answer20" onChange={completeForm}/>
            </div>
          {/* </div> */}
        </div>
        <div>
          <button className="form-button" type="button" onClick={Reset}>Reset</button>
          <button className="form-button" type="submit">Generate</button>
          <button className="form-button" type="button" onClick={Randomize}>Random</button>
          <button className="form-button" type="button" id="print-button" onClick={Print}>Print</button>
        </div>
    </fieldset>
  </form>

  );
}

export default Forming;
