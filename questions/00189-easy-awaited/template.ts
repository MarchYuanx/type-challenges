type MyAwaited<T> = T extends PromiseLike<infer K>
  ? K extends PromiseLike<any>
    ? MyAwaited<K>
    : K
  : undefined
