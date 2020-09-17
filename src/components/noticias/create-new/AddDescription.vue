<template>
<div class="add-introduction-new-content my-shadow">
    <textarea name="introduction" id="descriptionNew" cols="auto" placeholder="Descripción"></textarea>
       <div class="dropdown">
            <button class="drop-btn"><a>•••</a></button>
                <div class="drop-content">
                    <a>AGREGAR UBICACIÓN</a>
                    <a>DESACTIVAR COMENTARIOS</a>
                    <a>AGREGAR ETIQUETAS</a>
                    <a>ETIQUETAR USUARIO</a>
                </div>
        </div>
</div>
</template>

<script>


export default {
    name: 'AddDescription',
    data() {
        return {
            
        }
    },
    components: {
        
    },
}
</script>
