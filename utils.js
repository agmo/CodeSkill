function measureTimeToExecute(functionToExecute, params) {
    const t0 = performance.now();
    const result = functionToExecute(params);
    const t1 = performance.now();
    console.log(`Call to ${functionToExecute.name} took ${(t1-t0)} ms${typeof params === 'string' ? ` for a string of ${params.length} chars.` : '.'}`);
    return result;
}
