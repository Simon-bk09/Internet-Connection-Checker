window.addEventListener("load", checkInternetconnection);

function  checkInternetconnection(){
    const statusid = document.getElementById('statusid');
    const Ipid = document.getElementById('IpId');
    const Networksid = document.getElementById('Networkid');

    statusid.textContent = "Checking....";

    if( navigator.onLine){

        fetch('https://api.ipify.org?format=json')
        .then((Response) => Response.json())
        .then((data) =>{
            Ipid.textContent = data.ip;
            statusid.textContent = 'Connected'

            const connection = navigator.connection;
            const network = connection ? connection.downlink
             +'Mbps' : 'Unknown';

        })

        
        .catch(() =>{
            statusid.textContent = "Disconnected...";
            Ipid.textContent = "-"
            Networksid.textContent = "-"

        })
        
    }else{
        statusid.textContent = "Disconnected...";
        Ipid.textContent = "-"
        Networksid.textContent = "-"


    }

}