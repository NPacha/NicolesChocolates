console.log($);

const data = [
    { name: "Megatron", address: "Cybertron" },
    { name: "Some guy", address: "Some street" },
    { name: "Grace Hopper", address: "Arlington, Virginia" },
    { name: "Ching Shih", address: "The High Seas" },
    { name: "Slimer", address: "The Library" },
    { name: "Umbra", address: "The Void" },
    { name: "Hypatia", address: "The Neoplatonic school at Alexandria" },
    { name: "Matt Huntington", address: "Remote" },
    { name: "Ronald McDonald", address: "Casa del McDonalds" },
    { name: "Jem", address: "Starlight Music" }
  ];

const populateData = () => {
    for(let item of data){
        console.log(item);
        const $infoContainer = $('<div>').addClass('info-container');
        const $nameDiv = $('<div>').addClass('name').text(item.name);
        const $addressDiv = $('<div>').addClass('address').text(item.address);
        const $button = $(`<button id="${item.name}">Remove ${item.name}</button>`).addClass('remove').on('click', (event)=> {
            console.log(event.target);
            removeData(item.name)
        })
        $infoContainer.append($nameDiv);
        $infoContainer.append($addressDiv);
        $infoContainer.append($button)
        $('body').append($infoContainer);

    }
}

const addData = (name, address) => {
    data.push({
        name: name,
        address: address
    })
    $('body').empty();
    populateData();
}

const removeData = (name) => {
    const index = data.map((item)=> {
        return item.name
    }).indexOf(name)

    data.splice(index, 1);
    $('body').empty();
    populateData();

}

  $(()=> {
   populateData();
   addData('Andrea', 'In Some Mansion');
   removeData('Megatron');


  })

