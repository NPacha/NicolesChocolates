console.log($);
$(()=>{
    const $imgArray = $('.carousel-images').children();
    let currentImgIndex = 0;
    let highestIndex = $imgArray.length - 1;

    const nextImg = () => {
        $imgArray.eq(currentImgIndex).css('display', 'none');
        currentImgIndex < highestIndex ? 
        currentImgIndex++:
        currentImgIndex = 0;
        $imgArray.eq(currentImgIndex).css('display', 'block');
    }

    const prevImg = () => {
        $imgArray.eq(currentImgIndex).css('display', 'none');
        currentImgIndex <= 0?
        currentImgIndex = highestIndex:
        currentImgIndex --;
        $imgArray.eq(currentImgIndex).css('display', 'block');
        

    }

    
    //.eq means select this from the array, and apply this css to it
    $('.next').on('click', nextImg);
    $('.previous').on('click', prevImg);

})
