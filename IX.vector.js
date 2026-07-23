class IX_VECTOR {

    build(core){
        return {
            x: core % 81,
            y: (core * 3) % 81
        };
    }
}

window.IX_VECTOR = new IX_VECTOR();
