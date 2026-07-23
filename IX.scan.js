class IX_SCAN {

    detect(value){
        return {
            type: typeof value,
            length: (""+value).length,
            hash: (value * 17) % 999999
        };
    }
}

window.IX_SCAN = new IX_SCAN();
