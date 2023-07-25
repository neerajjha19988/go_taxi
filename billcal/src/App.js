import logo from './logo.svg';
import './App.css';
var input="";
function App() {
function calc()
{
	var x=parseInt(document.getElementById("watt").value);
	var totalbill=0;
	if(x<101)
	{
		totalbill=0;
	}
	if(x>100 && x<201)
	{
		totalbill=100;
		if(x>150)
		{
			totalbill=100+(x-150)*3.75;
		}
	}
	if(x>200 && x<401)
	{
		totalbill=250;
		if(x>350)
		{
			totalbill=250+(x-350)*4;
		}
	}
	if(x>400 && x<601)
	{
		totalbill=300;
		if(x>450)
		{
			totalbill=300+(x-450)*4.25;
		}
	}
	if(x>600)
	{
		totalbill=400;
		if(x>600)
		{
			totalbill=400+(x-600)*5;
		}
	}
  var cgst=totalbill*0.9;
  var sgst=totalbill*0.9;
  totalbill=totalbill+cgst+sgst;
		document.getElementById("unit").innerHTML=x;
		document.getElementById("unit").style.color="blue";
		document.getElementById("total").innerHTML=totalbill;
		document.getElementById("total").style.color="blue";
		document.getElementById("total1").innerHTML=totalbill;
		document.getElementById("total1").style.color="blue";
    document.getElementById("cgst").innerHTML=cgst;
    document.getElementById("cgst").style.color="blue";
    document.getElementById("sgst").innerHTML=sgst;
    document.getElementById("sgst").style.color="blue";
		if(totalbill>200)
		{
		document.getElementById("nettotal").innerHTML=totalbill-200;
		}
		else
		{
			document.getElementById("nettotal").innerHTML=totalbill;
		}
		document.getElementById("nettotal").style.color="blue";
}
  function doit(e){
      input+=e.target.value;
  }
  function viewit(){
    alert(document.getElementById("box").value);
  }
  return (
    <div className="App">
      <header className="App-header">
        <>
          <input type="text" onChange={doit} id="watt"/>
          <input type="button" onClick={calc} value="Calculate Bill"/>
          <table className="parag" >
          <tr><td><font color="red">Consumer Units</font></td><td id="unit"><font color="blue"></font></td></tr>
          <tr><td><font color="red">Total Current Charges ₹</font></td><td id="total"><font color="blue"></font></td></tr>
          <tr><td><font color="red">Current Charges ₹</font></td><td id="total1"><font color="blue"></font></td></tr>
          <tr><td><font color="red">Fixed Cost ₹ (+)</font></td><td><font color="blue">50.0</font></td></tr>
          <tr><td><font color="red">Subsidy Fixed Cost ₹ (-)</font></td><td><font color="blue">0.0</font></td></tr>
          <tr><td><font color="red">New Subsidy ₹ (-)</font></td><td><font color="blue">250.0</font></td></tr>
          <tr><td><font color="red">Net Amount ₹</font></td><td id="nettotal"><font color="blue"></font></td></tr>
          <tr><td><font color="red">SGST 9% ₹</font></td><td id="cgst"><font color="blue"></font></td></tr>
          <tr><td><font color="red">CGST 9% ₹</font></td><td id="sgst"><font color="blue"></font></td></tr>
          </table>
        </>
      
      </header>
    </div>
  );
}

export default App;
