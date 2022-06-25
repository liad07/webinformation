
      async  function f() {
            var url1="https://dns.google/resolve?name="+document.getElementById("link").value
            var response = await fetch(url1);
            var json = await response.json();
            var ip=json.Answer[0].data;
            var url2=json.Answer[0].name;
            url2=url2.substring(0,url2.length-1)
            var robots=url2+"/robots.txt"
            console.log(ip+","+url2+","+robots)
          document.getElementById("ip").textContent=ip;
          document.getElementById("url").textContent=url2;
          document.getElementById("robots").href="//"+robots;
          document.getElementById("robots").textContent="robots";
        }
