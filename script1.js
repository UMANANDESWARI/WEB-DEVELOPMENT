var Mycards = [{
                "Image" : "./iship_loggo.png",
                "Price" : 1200,
                "Brand" : "puma"
            },
            {
                "Image" : "./iship_loggo.png",
                "Price" : 1500,
                "Brand" : "US Polo"
            },
            {
                "Image" : "./iship_loggo.png",
                "Price" : 9000,
                "Brand" : "CK"
            },
            {
                "Image" : "./iship_loggo.png",
                "Price" : 5000,
                "Brand" : "Rare Rabbit"
            },
            {
                "Image" : "./iship_loggo.png",
                "Price" : 1800,
                "Brand" : "Puma"
            },
            {
                "Image" : "./iship_loggo.png",
                "Price" : 2000,
                "Brand" : "CK"
            },
            {
                "Image" : "./iship_loggo.png",
                "Price" : 1000,
                "Brand" : "Rare Rabbit"
            },
            {
                "Image" : "./iship_loggo.png",
                "Price" : 9000,
                "Brand" : "Puma"
            },
            {
                "Image" : "./iship_loggo.png",
                "Price" : 2500,
                "Brand" : "CK"
            },
            {
                "Image" : "./iship_loggo.png",
                "Price" : 6000,
                "Brand" : "Rare Rabbit"
            }];



            var Cards =  Mycards.map((ele) =>{
                console.log(ele)
                return(`<div class="card">
                        <div class="image-card">
                            <img src=${ele.Image} />
                        </div>
                        <div class="info-card">
                            <div>Price : ${ele.Price} </div>
                            <div>Brand : ${ele.Brand} </div>
                        </div>
                    </div>`)
            })
            var parent = document.getElementsByClassName("parent-card")[0]
            parent.innerHTML = Cards.join(" ")