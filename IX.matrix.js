class IX_MATRIX {

    build(core){
        return {
            row: core % 9,
            col: (core * 7) % 9
        };
    }
}

window.IX_MATRIX = new IX_MATRIX();
