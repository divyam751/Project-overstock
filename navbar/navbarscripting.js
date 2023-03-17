var loginarr = JSON.parse(localStorage.getItem("users")) || "";
      if (loginarr.length === 1){
        var btn = document.createElement("button");
        btn.setAttribute("id","divCheckout");
        var div1 = document.createElement("div");
        var img = document.createElement("img");
        img.setAttribute("src","images/lock.jpg");
        var div2 = document.createElement("div");
        div2.innerHTML ="Check Out";
        div1.append(img);
        btn.append(div1,div2);
        document.getElementById("navbar").append(btn);
      }

      document.querySelector("#cartCount").textContent = totalIC;