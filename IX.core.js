class IX {

    constructor(){
        this.input = null;
        this.scan = null;
        this.kernel = null;
        this.vector = null;
        this.matrix = null;
        this.room = null;
    }

    enter(value){
        this.input = value;
    }

    compute(){
        this.room = {
            IN: this.vector.x,
            CORE: this.kernel.core,
            OUT: this.matrix.row
        };

        return {
            input: this.input,
            scan: this.scan,
            kernel: this.kernel,
            vector: this.vector,
            matrix: this.matrix,
            room: this.room
        };
    }
}

window.IX = new IX();
