class IX_KERNEL {

    process(hash){
        return {
            core: (hash * 5) % 999999,
            mode: "IX-KERNEL"
        };
    }
}

window.IX_KERNEL = new IX_KERNEL();
