fetch_api()

document.getElementById('Completed').addEventListener('click',Completed_Todos)
document.getElementById('Pending').addEventListener('click',Pending_Todos)

let container1_div=document.getElementById('container1')
let container2_div=document.getElementById('container2')

let Completed=[]
let Pending=[]


function fetch_api()
{
    fetch ("https://jsonplaceholder.typicode.com/todos")
    .then (response=> response.json())

    .then(data=>{

        for (let i =0;i<data.length;i++)
        {

            if (data[i].completed===true)
            {
                Completed.push(data[i].title)
            }

            else
            {
                Pending.push(data[i].title)
            }

        }

    })
}


let count_1=0

function Completed_Todos()
{
    count_1+=1

    if(count_1%2!=0)
    {

        if(Completed.length==0){
            Completed=copy_completed
        }
        for(i=0;i<Completed.length;i++){
            list1=document.createElement('li');
            list1.innerHTML=Completed[i]
            container1_div.appendChild(list1)
        }
        copy_completed=Completed
        Completed=[]
    }

    else{
            container1_div.innerHTML=""
    }
}


let count_2=0

function Pending_Todos()
{
    count_2+=1
    if (count_2%2!=0)
    {
        if(Pending.length==0)
        {
            Pending=Pending_copy
        }

        for(i=0;i<Pending.length;i++)
        {
            list1=document.createElement('li')
            list1.innerHTML=Pending[i]
            container2_div.appendChild(list1)
        }

        Pending_copy=Pending
        Pending=[]
    }

    else
    {
        container2_div.innerHTML=''
    }

}