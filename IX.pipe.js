class IX_PIPE {

    forward(ix){
        return {
            next: "XI",
            signature: ix.scan.hash,
            vector: ix.vector,
            matrix: ix.matrix,
            room: ix.room
        };
    }
}

window.IX_PIPE = new IX_PIPE();
