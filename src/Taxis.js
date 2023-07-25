import React from 'react';
import './Taxis.css';
export default class Taxis extends React.Component{
 
    constructor(props){
        super(props);
    }
   sourceChanged(e){
    const cities=['Anna Nagar','Guindy','Saidapet','Airport','T.Nagar','Ashok Nagar','Sowkarpet','Marina Beach','Government Beach','MGR Film City','Little Mount','Anna University'];
    let suggestions=[];
    if(e.target.value){
        suggestions=cities.filter(city=>city.toLowerCase().startsWith(e.target.value));
        suggestions=suggestions.map(city=>`<li>${city}</li>`);
        const html=!suggestions.length ? '' : suggestions.join('');
    document.getElementById("sourceList").innerHTML=html;
    }
   }
   destinationChanged(e){
    const cities=['Anna Nagar','Guindy','Saidapet','Airport','T.Nagar','Ashok Nagar','Sowkarpet','Marina Beach','Government Beach','MGR Film City','Little Mount','Anna University'];
    let suggestions=[];
    if(e.target.value){
        suggestions=cities.filter(city=>city.toLowerCase().startsWith(e.target.value));
        suggestions=suggestions.map(city=>`<li>${city}</li>`);
        const html=!suggestions.length ? '' : suggestions.join('');
    document.getElementById("destinationList").innerHTML=html;
    }
   }
   Selected(e)
   {
    document.getElementById("source_Address").value=e.target.innerHTML;
    document.getElementById("sourceList").innerHTML="";
    if(document.getElementById("destination_Address").value===document.getElementById("source_Address").value)
    {
        alert("Source and Destination Address Cannot be Same");
        document.getElementById("source_Address").value="";
    } 
   }
   Selected1(e)
   {
    document.getElementById("destination_Address").value=e.target.innerHTML;
    document.getElementById("destinationList").innerHTML="";
    if(document.getElementById("destination_Address").value===document.getElementById("source_Address").value)
    {
        alert("Source and Destination Address Cannot be Same");
        document.getElementById("destination_Address").value="";
    }
   }
   book(){
        var source=document.getElementById("source_Address").value;
        var destination=document.getElementById("destination_Address").value;
        var date=document.getElementById("date").value;
        var time=document.getElementById("time").value;
        var vFare=document.getElementById("vType").value;
        var td=Math.floor(Math.random() * 10)+1;
        var vType="";
        if(vFare==15)
        {
            vType="HatchBack";
        }
        if(vFare==25)
        {
            vType="Sedan";
        }
        if(vFare==30)
        {
            vType="SUV";
        }
        if(source==="" || destination==="" || vFare==="" || vFare===-1|| date===""|| time==="")
        {
            alert("Please fill all details completely");
        }
        else
        {
            
            const chars=['A','E','I','O','U','K','J','D','E'];
            var bID=Math.floor(Math.random() * 10)+chars[Math.floor(Math.random() * 10)]+Math.floor(Math.random() * 10)+chars[Math.floor(Math.random() * 10)];
            var booking="Your Booking Details are:\nBooking ID: "+bID+"\n"+"Source Address: "+source+"\n"+"Destination Address: "+destination+"\nDate: "+date+"\nTime: "+time+"\nTotal Distance:"+td+"Kms\nVehicle Type: "+vType+"\nTotal Fare: ₹"+vFare*td;
            document.getElementById("bid").innerHTML="Booking ID: "+bID;
            document.getElementById("src").innerHTML="Source Address: "+source;
            document.getElementById("des").innerHTML="Destination Address: "+destination;
            document.getElementById("dat").innerHTML="Booking Date: "+date;
            document.getElementById("tim").innerHTML="Booking Time: "+time;
            document.getElementById("vtp").innerHTML="Vehicle Type: "+vType;
            document.getElementById("tds").innerHTML="Total Distance: "+td+"kms";
            document.getElementById("tfr").innerHTML="Total Fare: ₹"+vFare*td;
            alert("Booking Confirmed !!\n Enjoy your ride");
        }
        

   }
    render(){
        return(
            <>
            <h1>Go Taxi</h1>
            <table className="list">
                <tr>
                    <td>Enter Source</td><td>
                        <input type="text" id="source_Address" onChange={this.sourceChanged}/>
                        <ul id="sourceList" onClick={this.Selected}></ul>
                    </td>
                </tr>
                <tr>
                    <td>Enter Destination</td><td><input type="text" id="destination_Address" onChange={this.destinationChanged}/>
                    <ul id="destinationList" onClick={this.Selected1}></ul>
                    </td>
                </tr>
               
                <tr>
                    <td>Select Booking Date</td><td><input type="date" id="date"/></td>
                </tr>
                <tr>
                    <td>Select Booking Time</td><td><input type="time" id="time" className='time'/></td>
                </tr>
                 <tr>
                    <td>Select Vehicle Type</td><td>
                        <select id="vType">
                            <option value="-1">----Select Vehicle Type----</option>
                            <option value="15">HatchBack ₹15 per KM</option>
                            <option value="25">Sedan ₹25 per KM</option>
                            <option value="30">SUV ₹30 per KM</option>
                        </select>
                    </td>
                </tr>
                <tr>
                    <td colSpan="2"><input type="button" value="Book Now" id="btn" onClick={this.book}/></td>
                </tr>
            </table>
            <p id="bid"></p>
            <p id="src"></p>
            <p id="des"></p>
            <p id="dat"></p>
            <p id="tim"></p>
            <p id="vtp"></p>
            <p id="tds"></p>
            <p id="tfr"></p>
            </>
        )
    }
}