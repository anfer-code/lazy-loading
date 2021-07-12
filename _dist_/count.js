function contarImg() {
    let imgAdd = 0
    let imgPaint = 0
    
    return {
        imgAgreg: function(){
            imgAdd++
            console.log(`⚪ Se han agregado ${imgAdd} imágenes`);
            console.log(`🟣 Se han cargado ${imgPaint} imágenes`);
            console.log("---------------------------------------");
        },
        imgLoad: function(){
            imgPaint++
            console.log(`⚪ Se han agregado ${imgAdd} imágenes`);
            console.log(`🟣 Se han cargado ${imgPaint} imágenes`);
            console.log("---------------------------------------");
        },
        imgDelete: function(){
            imgPaint = 0
            imgAdd = 0
            console.clear()
        }
    }
}

export const contar = contarImg()