let container=document.getElementById("container");

let flexDirectionValue="row";
let justifyContentValue="nowrap";
let flexWrapValue="flex-start";
let alignItemsValue="stretch";
let alignContentValue="stretch";
let gapValue="5px";

function justifyContent() { container.style.justifyContent = document.getElementById("justifyContent").value;
justifyContentValue= document.getElementById("justifyContent").value;                      
}

function alignItems() { container.style.alignItems = document.getElementById("alignItems").value;
alignItemsValue= document.getElementById("alignItems").value;                      
}

function flexDirection() { container.style.flexDirection = document.getElementById("flexDirection").value;
flexDirectionValue=document.getElementById("flexDirection").value;
}

function alignContent() { container.style.alignContent = document.getElementById("alignContent").value;
alignContentValue=document.getElementById("alignContent").value;
}

function flexWrap() { container.style.flexWrap = document.getElementById("flexWrap").value;
flexWrapValue= document.getElementById("flexWrap").value;
}

function range() {
  let x = document.getElementById("gapRange").value+"px";

document.getElementById("gapSpan").innerHTML=x;
  container.style.gap = x;
  
  gapValue=x;
}

function addBox() { container.innerHTML  += `        
        <div class="item a">A</div>
        <div class="item b">B</div>
        <div class="item c">C</div>
        <div class="item d">D</div>`;
}

function resetBox() { container.innerHTML  = `        
        <div class="item a">A</div>
        <div class="item b">B</div>
        <div class="item c">C</div>
        <div class="item d">D</div>`;
}

async function copyText() {
  let code=`.container {
    display: flex;
    flex-direction:${flexDirectionValue};
    flex-wrap:${flexWrapValue};
    justify-content:${justifyContentValue};
    align-items:${alignItemsValue};
    align-content:${alignContentValue};
    gap:${gapValue};
  }`;
  let result = await navigator.clipboard.writeText(code).then(() => {
        alert("Code copied successfully");
      })
      .catch(() => {
        alert("Something went wrong!");
      });  
}
