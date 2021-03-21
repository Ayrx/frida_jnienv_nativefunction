class JNIEnv {
    private env: NativePointer

    private _GetVersion: NativeFunction | undefined;
    private _DefineClass: NativeFunction | undefined;
    private _FindClass: NativeFunction | undefined;
    private _FromReflectedMethod: NativeFunction | undefined;
    private _FromReflectedField: NativeFunction | undefined;
    private _ToReflectedMethod: NativeFunction | undefined;
    private _GetSuperclass: NativeFunction | undefined;
    private _IsAssignableFrom: NativeFunction | undefined;
    private _ToReflectedField: NativeFunction | undefined;
    private _Throw: NativeFunction | undefined;
    private _ThrowNew: NativeFunction | undefined;
    private _ExceptionOccurred: NativeFunction | undefined;
    private _ExceptionDescribe: NativeFunction | undefined;
    private _ExceptionClear: NativeFunction | undefined;
    private _FatalError: NativeFunction | undefined;
    private _PushLocalFrame: NativeFunction | undefined;
    private _PopLocalFrame: NativeFunction | undefined;
    private _NewGlobalRef: NativeFunction | undefined;
    private _DeleteGlobalRef: NativeFunction | undefined;
    private _DeleteLocalRef: NativeFunction | undefined;
    private _IsSameObject: NativeFunction | undefined;
    private _NewLocalRef: NativeFunction | undefined;
    private _EnsureLocalCapacity: NativeFunction | undefined;
    private _AllocObject: NativeFunction | undefined;
    // NewObject: NativeFunction | undefined;
    // NewObjectV: NativeFunction | undefined;
    private _NewObjectA: NativeFunction | undefined;
    private _GetObjectClass: NativeFunction | undefined;
    private _IsInstanceOf: NativeFunction | undefined;
    private _GetMethodID: NativeFunction | undefined;
    // CallObjectMethod: NativeFunction | undefined;
    // CallObjectMethodV: NativeFunction | undefined;
    private _CallObjectMethodA: NativeFunction | undefined;
    // CallBooleanMethod: NativeFunction | undefined;
    // CallBooleanMethodV: NativeFunction | undefined;
    private _CallBooleanMethodA: NativeFunction | undefined;
    // CallByteMethod: NativeFunction | undefined;
    //CallByteMethodV: NativeFunction | undefined;
    private _CallByteMethodA: NativeFunction | undefined;
    // CallCharMethod: NativeFunction | undefined;
    // CallCharMethodV: NativeFunction | undefined;
    private _CallCharMethodA: NativeFunction | undefined;
    // CallShortMethod: NativeFunction | undefined;
    // CallShortMethodV: NativeFunction | undefined;
    private _CallShortMethodA: NativeFunction | undefined;
    // CallIntMethod: NativeFunction | undefined;
    // CallIntMethodV: NativeFunction | undefined;
    private _CallIntMethodA: NativeFunction | undefined;
    // CallLongMethod: NativeFunction | undefined;
    // CallLongMethodV: NativeFunction | undefined;
    private _CallLongMethodA: NativeFunction | undefined;
    // CallFloatMethod: NativeFunction | undefined;
    // CallFloatMethodV: NativeFunction | undefined;
    private _CallFloatMethodA: NativeFunction | undefined;
    // CallDoubleMethod: NativeFunction | undefined;
    // CallDoubleMethodV: NativeFunction | undefined;
    private _CallDoubleMethodA: NativeFunction | undefined;
    // CallVoidMethod: NativeFunction | undefined;
    // CallVoidMethodV: NativeFunction | undefined;
    private _CallVoidMethodA: NativeFunction | undefined;
    // CallNonvirtualObjectMethod: NativeFunction | undefined;
    // CallNonvirtualObjectMethodV: NativeFunction | undefined;
    private _CallNonvirtualObjectMethodA: NativeFunction | undefined;
    // CallNonvirtualBooleanMethod: NativeFunction | undefined;
    // CallNonvirtualBooleanMethodV: NativeFunction | undefined;
    private _CallNonvirtualBooleanMethodA: NativeFunction | undefined;
    // CallNonvirtualByteMethod: NativeFunction | undefined;
    // CallNonvirtualByteMethodV: NativeFunction | undefined;
    private _CallNonvirtualByteMethodA: NativeFunction | undefined;
    // CallNonvirtualCharMethod: NativeFunction | undefined;
    // CallNonvirtualCharMethodV: NativeFunction | undefined;
    private _CallNonvirtualCharMethodA: NativeFunction | undefined;
    // CallNonvirtualShortMethod: NativeFunction | undefined;
    // CallNonvirtualShortMethodV: NativeFunction | undefined;
    private _CallNonvirtualShortMethodA: NativeFunction | undefined;
    // CallNonvirtualIntMethod: NativeFunction | undefined;
    // CallNonvirtualIntMethodV: NativeFunction | undefined;
    private _CallNonvirtualIntMethodA: NativeFunction | undefined;
    // CallNonvirtualLongMethod: NativeFunction | undefined;
    // CallNonvirtualLongMethodV: NativeFunction | undefined;
    private _CallNonvirtualLongMethodA: NativeFunction | undefined;
    // CallNonvirtualFloatMethod: NativeFunction | undefined;
    // CallNonvirtualFloatMethodV: NativeFunction | undefined;
    private _CallNonvirtualFloatMethodA: NativeFunction | undefined;
    // CallNonvirtualDoubleMethod: NativeFunction | undefined;
    // CallNonvirtualDoubleMethodV: NativeFunction | undefined;
    private _CallNonvirtualDoubleMethodA: NativeFunction | undefined;
    // CallNonvirtualVoidMethod: NativeFunction | undefined;
    // CallNonvirtualVoidMethodV: NativeFunction | undefined;
    private _CallNonvirtualVoidMethodA: NativeFunction | undefined;
    private _GetFieldID: NativeFunction | undefined;
    private _GetObjectField: NativeFunction | undefined;
    private _GetBooleanField: NativeFunction | undefined;
    private _GetByteField: NativeFunction | undefined;
    private _GetCharField: NativeFunction | undefined;
    private _GetShortField: NativeFunction | undefined;
    private _GetIntField: NativeFunction | undefined;
    private _GetLongField: NativeFunction | undefined;
    private _GetFloatField: NativeFunction | undefined;
    private _GetDoubleField: NativeFunction | undefined;
    private _SetObjectField: NativeFunction | undefined;
    private _SetBooleanField: NativeFunction | undefined;
    private _SetByteField: NativeFunction | undefined;
    private _SetCharField: NativeFunction | undefined;
    private _SetShortField: NativeFunction | undefined;
    private _SetIntField: NativeFunction | undefined;
    private _SetLongField: NativeFunction | undefined;
    private _SetFloatField: NativeFunction | undefined;
    private _SetDoubleField: NativeFunction | undefined;
    private _GetStaticMethodID: NativeFunction | undefined;
    // CallStaticObjectMethod: NativeFunction | undefined;
    // CallStaticObjectMethodV: NativeFunction | undefined;
    private _CallStaticObjectMethodA: NativeFunction | undefined;
    // CallStaticBooleanMethod: NativeFunction | undefined;
    // CallStaticBooleanMethodV: NativeFunction | undefined;
    private _CallStaticBooleanMethodA: NativeFunction | undefined;
    // CallStaticByteMethod: NativeFunction | undefined;
    // CallStaticByteMethodV: NativeFunction | undefined;
    private _CallStaticByteMethodA: NativeFunction | undefined;
    // CallStaticCharMethod: NativeFunction | undefined;
    // CallStaticCharMethodV: NativeFunction | undefined;
    private _CallStaticCharMethodA: NativeFunction | undefined;
    // CallStaticShortMethod: NativeFunction | undefined;
    // CallStaticShortMethodV: NativeFunction | undefined;
    private _CallStaticShortMethodA: NativeFunction | undefined;
    // CallStaticIntMethod: NativeFunction | undefined;
    // CallStaticIntMethodV: NativeFunction | undefined;
    private _CallStaticIntMethodA: NativeFunction | undefined;
    // CallStaticLongMethod: NativeFunction | undefined;
    // CallStaticLongMethodV: NativeFunction | undefined;
    private _CallStaticLongMethodA: NativeFunction | undefined;
    // CallStaticFloatMethod: NativeFunction | undefined;
    // CallStaticFloatMethodV: NativeFunction | undefined;
    private _CallStaticFloatMethodA: NativeFunction | undefined;
    // CallStaticDoubleMethod: NativeFunction | undefined;
    // CallStaticDoubleMethodV: NativeFunction | undefined;
    private _CallStaticDoubleMethodA: NativeFunction | undefined;
    // CallStaticVoidMethod: NativeFunction | undefined;
    // CallStaticVoidMethodV: NativeFunction | undefined;
    private _CallStaticVoidMethodA: NativeFunction | undefined;
    private _GetStaticFieldID: NativeFunction | undefined;
    private _GetStaticObjectField: NativeFunction | undefined;
    private _GetStaticBooleanField: NativeFunction | undefined;
    private _GetStaticByteField: NativeFunction | undefined;
    private _GetStaticCharField: NativeFunction | undefined;
    private _GetStaticShortField: NativeFunction | undefined;
    private _GetStaticIntField: NativeFunction | undefined;
    private _GetStaticLongField: NativeFunction | undefined;
    private _GetStaticFloatField: NativeFunction | undefined;
    private _GetStaticDoubleField: NativeFunction | undefined;
    private _SetStaticObjectField: NativeFunction | undefined;
    private _SetStaticBooleanField: NativeFunction | undefined;
    private _SetStaticByteField: NativeFunction | undefined;
    private _SetStaticCharField: NativeFunction | undefined;
    private _SetStaticShortField: NativeFunction | undefined;
    private _SetStaticIntField: NativeFunction | undefined;
    private _SetStaticLongField: NativeFunction | undefined;
    private _SetStaticFloatField: NativeFunction | undefined;
    private _SetStaticDoubleField: NativeFunction | undefined;
    private _NewString: NativeFunction | undefined;
    private _GetStringLength: NativeFunction | undefined;
    private _GetStringChars: NativeFunction | undefined;
    private _ReleaseStringChars: NativeFunction | undefined;
    private _NewStringUTF: NativeFunction | undefined;
    private _GetStringUTFLength: NativeFunction | undefined;
    private _GetStringUTFChars: NativeFunction | undefined;
    private _ReleaseStringUTFChars: NativeFunction | undefined;
    private _GetArrayLength: NativeFunction | undefined;
    private _NewObjectArray: NativeFunction | undefined;
    private _GetObjectArrayElement: NativeFunction | undefined;
    private _SetObjectArrayElement: NativeFunction | undefined;
    private _NewBooleanArray: NativeFunction | undefined;
    private _NewByteArray: NativeFunction | undefined;
    private _NewCharArray: NativeFunction | undefined;
    private _NewShortArray: NativeFunction | undefined;
    private _NewIntArray: NativeFunction | undefined;
    private _NewLongArray: NativeFunction | undefined;
    private _NewFloatArray: NativeFunction | undefined;
    private _NewDoubleArray: NativeFunction | undefined;
    private _GetBooleanArrayElements: NativeFunction | undefined;
    private _GetByteArrayElements: NativeFunction | undefined;
    private _GetCharArrayElements: NativeFunction | undefined;
    private _GetShortArrayElements: NativeFunction | undefined;
    private _GetIntArrayElements: NativeFunction | undefined;
    private _GetLongArrayElements: NativeFunction | undefined;
    private _GetFloatArrayElements: NativeFunction | undefined;
    private _GetDoubleArrayElements: NativeFunction | undefined;
    private _ReleaseBooleanArrayElements: NativeFunction | undefined;
    private _ReleaseByteArrayElements: NativeFunction | undefined;
    private _ReleaseCharArrayElements: NativeFunction | undefined;
    private _ReleaseShortArrayElements: NativeFunction | undefined;
    private _ReleaseIntArrayElements: NativeFunction | undefined;
    private _ReleaseLongArrayElements: NativeFunction | undefined;
    private _ReleaseFloatArrayElements: NativeFunction | undefined;
    private _ReleaseDoubleArrayElements: NativeFunction | undefined;
    private _GetBooleanArrayRegion: NativeFunction | undefined;
    private _GetByteArrayRegion: NativeFunction | undefined;
    private _GetCharArrayRegion: NativeFunction | undefined;
    private _GetShortArrayRegion: NativeFunction | undefined;
    private _GetIntArrayRegion: NativeFunction | undefined;
    private _GetLongArrayRegion: NativeFunction | undefined;
    private _GetFloatArrayRegion: NativeFunction | undefined;
    private _GetDoubleArrayRegion: NativeFunction | undefined;
    private _SetBooleanArrayRegion: NativeFunction | undefined;
    private _SetByteArrayRegion: NativeFunction | undefined;
    private _SetCharArrayRegion: NativeFunction | undefined;
    private _SetShortArrayRegion: NativeFunction | undefined;
    private _SetIntArrayRegion: NativeFunction | undefined;
    private _SetLongArrayRegion: NativeFunction | undefined;
    private _SetFloatArrayRegion: NativeFunction | undefined;
    private _SetDoubleArrayRegion: NativeFunction | undefined;
    private _RegisterNatives: NativeFunction | undefined;
    private _UnregisterNatives: NativeFunction | undefined;
    private _MonitorEnter: NativeFunction | undefined;
    private _MonitorExit: NativeFunction | undefined;
    private _GetJavaVM: NativeFunction | undefined;
    private _GetStringRegion: NativeFunction | undefined;
    private _GetStringUTFRegion: NativeFunction | undefined;
    private _GetPrimitiveArrayCritical: NativeFunction | undefined;
    private _ReleasePrimitiveArrayCritical: NativeFunction | undefined;
    private _GetStringCritical: NativeFunction | undefined;
    private _ReleaseStringCritical: NativeFunction | undefined;
    private _NewWeakGlobalRef: NativeFunction | undefined;
    private _DeleteWeakGlobalRef: NativeFunction | undefined;
    private _ExceptionCheck: NativeFunction | undefined;
    private _NewDirectByteBuffer: NativeFunction | undefined;
    private _GetDirectBufferAddress: NativeFunction | undefined;
    private _GetDirectBufferCapacity: NativeFunction | undefined;
    private _GetObjectRefType: NativeFunction | undefined;


    constructor(env: NativePointer) {
        this.env = env;
    }

    get GetVersion(): NativeFunction {
        if (this._GetVersion === undefined) {
            this._GetVersion = new NativeFunction(
                this.env.readPointer().add(4 * Process.pointerSize).readPointer(),
                "int32",
                ["pointer"]
            );
        }
        return this._GetVersion;
    }

    get DefineClass(): NativeFunction {
        if (this._DefineClass === undefined) {
            this._DefineClass = new NativeFunction(
                this.env.readPointer().add(5 * Process.pointerSize).readPointer(),
                "pointer",
                ["pointer", "pointer", "pointer", "pointer", "int32"]
            );
        }
        return this._DefineClass;
    }

    get FindClass(): NativeFunction {
        if (this._FindClass === undefined) {
            this._FindClass = new NativeFunction(
                this.env.readPointer().add(6 * Process.pointerSize).readPointer(),
                "pointer",
                ["pointer", "pointer"]
            );
        }
        return this._FindClass;
    }

    get FromReflectedMethod(): NativeFunction {
        if (this._FromReflectedMethod === undefined) {
            this._FromReflectedMethod = new NativeFunction(
                this.env.readPointer().add(7 * Process.pointerSize).readPointer(),
                "pointer",
                ["pointer", "pointer"]
            );
        }
        return this._FromReflectedMethod;
    }

    get FromReflectedField(): NativeFunction {
        if (this._FromReflectedField === undefined) {
            this._FromReflectedField = new NativeFunction(
                this.env.readPointer().add(8 * Process.pointerSize).readPointer(),
                "pointer",
                ["pointer", "pointer"]
            );
        }
        return this._FromReflectedField;
    }

    get ToReflectedMethod(): NativeFunction {
        if (this._ToReflectedMethod === undefined) {
            this._ToReflectedMethod = new NativeFunction(
                this.env.readPointer().add(9 * Process.pointerSize).readPointer(),
                "pointer",
                ["pointer", "pointer", "pointer", "bool"]
            );
        }
        return this._ToReflectedMethod;
    }

    get GetSuperclass(): NativeFunction {
        if (this._GetSuperclass === undefined) {
            this._GetSuperclass = new NativeFunction(
                this.env.readPointer().add(10 * Process.pointerSize).readPointer(),
                "pointer",
                ["pointer", "pointer"]
            );
        }
        return this._GetSuperclass;
    }

    get IsAssignableFrom(): NativeFunction {
        if (this._IsAssignableFrom === undefined) {
            this._IsAssignableFrom = new NativeFunction(
                this.env.readPointer().add(11 * Process.pointerSize).readPointer(),
                "bool",
                ["pointer", "pointer", "pointer"]
            );
        }
        return this._IsAssignableFrom;
    }

    get ToReflectedField(): NativeFunction {
        if (this._ToReflectedField === undefined) {
            this._ToReflectedField = new NativeFunction(
                this.env.readPointer().add(12 * Process.pointerSize).readPointer(),
                "bool",
                ["pointer", "pointer", "pointer", "bool"]
            );
        }
        return this._ToReflectedField;
    }

    get Throw(): NativeFunction {
        if (this._Throw === undefined) {
            this._Throw = new NativeFunction(
                this.env.readPointer().add(13 * Process.pointerSize).readPointer(),
                "int32",
                ["pointer", "pointer"]
            );
        }
        return this._Throw;
    }

    get ThrowNew(): NativeFunction {
        if (this._ThrowNew === undefined) {
            this._ThrowNew = new NativeFunction(
                this.env.readPointer().add(14 * Process.pointerSize).readPointer(),
                "int32",
                ["pointer", "pointer", "pointer"]
            );
        }
        return this._ThrowNew;
    }

    get ExceptionOccurred(): NativeFunction {
        if (this._ExceptionOccurred === undefined) {
            this._ExceptionOccurred = new NativeFunction(
                this.env.readPointer().add(15 * Process.pointerSize).readPointer(),
                "pointer",
                ["pointer"]
            );
        }
        return this._ExceptionOccurred;
    }

    get ExceptionDescribe(): NativeFunction {
        if (this._ExceptionDescribe === undefined) {
            this._ExceptionDescribe = new NativeFunction(
                this.env.readPointer().add(16 * Process.pointerSize).readPointer(),
                "void",
                ["pointer"]
            );
        }
        return this.ExceptionDescribe;
    }

    get ExceptionClear(): NativeFunction {
        if (this._ExceptionClear === undefined) {
            this._ExceptionClear = new NativeFunction(
                this.env.readPointer().add(17 * Process.pointerSize).readPointer(),
                "void",
                ["pointer"]
            );
        }
        return this._ExceptionClear;
    }

    get FatalError(): NativeFunction {
        if (this._FatalError === undefined) {
            this._FatalError = new NativeFunction(
                this.env.readPointer().add(18 * Process.pointerSize).readPointer(),
                "void",
                ["pointer", "pointer"]
            );
        }
        return this._FatalError;
    }

    get PushLocalFrame(): NativeFunction {
        if (this._PushLocalFrame === undefined) {
            this._PushLocalFrame = new NativeFunction(
                this.env.readPointer().add(19 * Process.pointerSize).readPointer(),
                "int32",
                ["pointer", "int32"]
            );
        }
        return this.PushLocalFrame;
    }

    get PopLocalFrame(): NativeFunction {
        if (this._PopLocalFrame === undefined) {
            this._PopLocalFrame = new NativeFunction(
                this.env.readPointer().add(20 * Process.pointerSize).readPointer(),
                "pointer",
                ["pointer", "pointer"]
            );
        }
        return this._PopLocalFrame;
    }

    get NewGlobalRef(): NativeFunction {
        if (this._NewGlobalRef === undefined) {
            this._NewGlobalRef = new NativeFunction(
                this.env.readPointer().add(21 * Process.pointerSize).readPointer(),
                "pointer",
                ["pointer", "pointer"]
            );
        }
        return this._NewGlobalRef;
    }

    get DeleteGlobalRef(): NativeFunction {
        if (this._DeleteGlobalRef === undefined) {
            this._DeleteGlobalRef = new NativeFunction(
                this.env.readPointer().add(22 * Process.pointerSize).readPointer(),
                "void",
                ["pointer", "pointer"]
            );
        }
        return this._DeleteGlobalRef;
    }

    get DeleteLocalRef(): NativeFunction {
        if (this._DeleteLocalRef === undefined) {
            this._DeleteLocalRef = new NativeFunction(
                this.env.readPointer().add(23 * Process.pointerSize).readPointer(),
                "void",
                ["pointer", "pointer"]
            );
        }
        return this._DeleteLocalRef;
    }

    get IsSameObject(): NativeFunction {
        if (this._IsSameObject === undefined) {
            this._IsSameObject = new NativeFunction(
                this.env.readPointer().add(24 * Process.pointerSize).readPointer(),
                "bool",
                ["pointer", "pointer", "pointer"]
            );
        }
        return this._IsSameObject;
    }

    get NewLocalRef(): NativeFunction {
        if (this._NewLocalRef === undefined) {
            this._NewLocalRef = new NativeFunction(
                this.env.readPointer().add(25 * Process.pointerSize).readPointer(),
                "pointer",
                ["pointer", "pointer"]
            );
        }
        return this._NewLocalRef;
    }

    get EnsureLocalCapacity(): NativeFunction {
        if (this._EnsureLocalCapacity === undefined) {
            this._EnsureLocalCapacity = new NativeFunction(
                this.env.readPointer().add(26 * Process.pointerSize).readPointer(),
                "int32",
                ["pointer", "int32"]
            );
        }
        return this._EnsureLocalCapacity;
    }

    get AllocObject(): NativeFunction {
        if (this._AllocObject === undefined) {
            this._AllocObject = new NativeFunction(
                this.env.readPointer().add(27 * Process.pointerSize).readPointer(),
                "pointer",
                ["pointer", "pointer"]
            );
        }
        return this._AllocObject;
    }

    get NewObjectA(): NativeFunction {
        if (this._NewObjectA === undefined) {
            this._NewObjectA = new NativeFunction(
                this.env.readPointer().add(30 * Process.pointerSize).readPointer(),
                "pointer",
                ["pointer", "pointer", "pointer", "pointer"]
            );
        }
        return this._NewObjectA;
    }

    get GetObjectClass(): NativeFunction {
        if (this._GetObjectClass === undefined) {
            this._GetObjectClass = new NativeFunction(
                this.env.readPointer().add(31 * Process.pointerSize).readPointer(),
                "pointer",
                ["pointer", "pointer"]
            );
        }
        return this._GetObjectClass;
    }

    get IsInstanceOf(): NativeFunction {
        if (this._IsInstanceOf === undefined) {
            this._IsInstanceOf = new NativeFunction(
                this.env.readPointer().add(32 * Process.pointerSize).readPointer(),
                "bool",
                ["pointer", "pointer", "pointer"]
            );
        }
        return this._IsInstanceOf;
    }

    get GetMethodID(): NativeFunction {
        if (this._GetMethodID === undefined) {
            this._GetMethodID = new NativeFunction(
                this.env.readPointer().add(33 * Process.pointerSize).readPointer(),
                "pointer",
                ["pointer", "pointer", "pointer", "pointer"]
            );
        }
        return this._GetMethodID;
    }

    get CallObjectMethodA(): NativeFunction {
        if (this._CallObjectMethodA === undefined) {
            this._CallObjectMethodA = new NativeFunction(
                this.env.readPointer().add(36 * Process.pointerSize).readPointer(),
                "pointer",
                ["pointer", "pointer", "pointer", "pointer"]
            );
        }
        return this._CallObjectMethodA;
    }

    get CallBooleanMethodA(): NativeFunction {
        if (this._CallBooleanMethodA === undefined) {
            this._CallBooleanMethodA = new NativeFunction(
                this.env.readPointer().add(39 * Process.pointerSize).readPointer(),
                "bool",
                ["pointer", "pointer", "pointer", "pointer"]
            );
        }
        return this._CallBooleanMethodA;
    }

    get CallByteMethodA(): NativeFunction {
        if (this._CallByteMethodA === undefined) {
            this._CallByteMethodA = new NativeFunction(
                this.env.readPointer().add(42 * Process.pointerSize).readPointer(),
                "int8",
                ["pointer", "pointer", "pointer", "pointer"]
            );
        }
        return this._CallByteMethodA;
    }

    get CallCharMethodA(): NativeFunction {
        if (this._CallCharMethodA === undefined) {
            this._CallCharMethodA = new NativeFunction(
                this.env.readPointer().add(45 * Process.pointerSize).readPointer(),
                "uint16",
                ["pointer", "pointer", "pointer", "pointer"]
            );
        }
        return this._CallCharMethodA;
    }

    get CallShortMethodA(): NativeFunction {
        if (this._CallShortMethodA === undefined) {
            this._CallShortMethodA = new NativeFunction(
                this.env.readPointer().add(48 * Process.pointerSize).readPointer(),
                "int16",
                ["pointer", "pointer", "pointer", "pointer"]
            );
        }
        return this._CallShortMethodA;
    }

    get CallIntMethodA(): NativeFunction {
        if (this._CallIntMethodA === undefined) {
            this._CallIntMethodA = new NativeFunction(
                this.env.readPointer().add(51 * Process.pointerSize).readPointer(),
                "int32",
                ["pointer", "pointer", "pointer", "pointer"]
            );
        }
        return this._CallIntMethodA;
    }

    get CallLongMethodA(): NativeFunction {
        if (this._CallLongMethodA === undefined) {
            this._CallLongMethodA = new NativeFunction(
                this.env.readPointer().add(54 * Process.pointerSize).readPointer(),
                "int64",
                ["pointer", "pointer", "pointer", "pointer"]
            );
        }
        return this._CallLongMethodA;
    }

    get CallFloatMethodA(): NativeFunction {
        if (this._CallFloatMethodA === undefined) {
            this._CallFloatMethodA = new NativeFunction(
                this.env.readPointer().add(57 * Process.pointerSize).readPointer(),
                "float",
                ["pointer", "pointer", "pointer", "pointer"]
            );
        }
        return this._CallFloatMethodA;
    }

    get CallDoubleMethodA(): NativeFunction {
        if (this._CallDoubleMethodA === undefined) {
            this._CallDoubleMethodA = new NativeFunction(
                this.env.readPointer().add(60 * Process.pointerSize).readPointer(),
                "double",
                ["pointer", "pointer", "pointer", "pointer"]
            );
        }
        return this._CallDoubleMethodA;
    }

    get CallVoidMethodA(): NativeFunction {
        if (this._CallVoidMethodA === undefined) {
            this._CallVoidMethodA = new NativeFunction(
                this.env.readPointer().add(63 * Process.pointerSize).readPointer(),
                "void",
                ["pointer", "pointer", "pointer", "pointer"]
            );
        }
        return this._CallVoidMethodA;
    }

    get CallNonvirtualObjectMethodA(): NativeFunction {
        if (this._CallNonvirtualObjectMethodA === undefined) {
            this._CallNonvirtualObjectMethodA = new NativeFunction(
                this.env.readPointer().add(66 * Process.pointerSize).readPointer(),
                "pointer",
                ["pointer", "pointer", "pointer", "pointer"]
            );
        }
        return this._CallNonvirtualObjectMethodA;
    }

    get CallNonvirtualBooleanMethodA(): NativeFunction {
        if (this._CallNonvirtualBooleanMethodA === undefined) {
            this._CallNonvirtualBooleanMethodA = new NativeFunction(
                this.env.readPointer().add(69 * Process.pointerSize).readPointer(),
                "bool",
                ["pointer", "pointer", "pointer", "pointer"]
            );
        }
        return this._CallNonvirtualBooleanMethodA;
    }

    get CallNonvirtualByteMethodA(): NativeFunction {
        if (this._CallNonvirtualByteMethodA === undefined) {
            this._CallNonvirtualByteMethodA = new NativeFunction(
                this.env.readPointer().add(72 * Process.pointerSize).readPointer(),
                "int8",
                ["pointer", "pointer", "pointer", "pointer"]
            );
        }
        return this._CallNonvirtualByteMethodA;
    }

    get CallNonvirtualCharMethodA(): NativeFunction {
        if (this._CallNonvirtualCharMethodA === undefined) {
            this._CallNonvirtualCharMethodA = new NativeFunction(
                this.env.readPointer().add(75 * Process.pointerSize).readPointer(),
                "uint16",
                ["pointer", "pointer", "pointer", "pointer"]
            );
        }
        return this._CallNonvirtualCharMethodA;
    }

    get CallNonvirtualShortMethodA(): NativeFunction {
        if (this._CallNonvirtualShortMethodA === undefined) {
            this._CallNonvirtualShortMethodA = new NativeFunction(
                this.env.readPointer().add(78 * Process.pointerSize).readPointer(),
                "int16",
                ["pointer", "pointer", "pointer", "pointer"]
            )
        }
        return this._CallNonvirtualShortMethodA;
    }

    get CallNonvirtualIntMethodA(): NativeFunction {
        if (this._CallNonvirtualIntMethodA === undefined) {
            this._CallNonvirtualIntMethodA = new NativeFunction(
                this.env.readPointer().add(81 * Process.pointerSize).readPointer(),
                "int32",
                ["pointer", "pointer", "pointer", "pointer"]
            );
        }
        return this._CallNonvirtualIntMethodA;
    }

    get CallNonvirtualLongMethodA(): NativeFunction {
        if (this._CallNonvirtualLongMethodA === undefined) {
            this._CallNonvirtualLongMethodA = new NativeFunction(
                this.env.readPointer().add(84 * Process.pointerSize).readPointer(),
                "int64",
                ["pointer", "pointer", "pointer", "pointer"]
            );
        }
        return this._CallNonvirtualLongMethodA;
    }

    get CallNonvirtualFloatMethodA(): NativeFunction {
        if (this._CallNonvirtualFloatMethodA === undefined) {
            this._CallNonvirtualFloatMethodA = new NativeFunction(
                this.env.readPointer().add(87 * Process.pointerSize).readPointer(),
                "float",
                ["pointer", "pointer", "pointer", "pointer"]
            );
        }
        return this._CallNonvirtualFloatMethodA;
    }

    get CallNonvirtualDoubleMethodA(): NativeFunction {
        if (this._CallNonvirtualDoubleMethodA === undefined) {
            this._CallNonvirtualDoubleMethodA = new NativeFunction(
                this.env.readPointer().add(90 * Process.pointerSize).readPointer(),
                "double",
                ["pointer", "pointer", "pointer", "pointer"]
            );
        }
        return this._CallNonvirtualDoubleMethodA;
    }

    get CallNonvirtualVoidMethodA(): NativeFunction {
        if (this._CallNonvirtualVoidMethodA === undefined) {
            this._CallNonvirtualVoidMethodA = new NativeFunction(
                this.env.readPointer().add(93 * Process.pointerSize).readPointer(),
                "void",
                ["pointer", "pointer", "pointer", "pointer"]
            );
        }
        return this._CallNonvirtualVoidMethodA;
    }

    get GetFieldID(): NativeFunction {
        if (this._GetFieldID === undefined) {
            this._GetFieldID = new NativeFunction(
                this.env.readPointer().add(94 * Process.pointerSize).readPointer(),
                "pointer",
                ["pointer", "pointer", "pointer", "pointer"]
            );
        }
        return this._GetFieldID;
    }

    get GetObjectField(): NativeFunction {
        if (this._GetObjectField === undefined) {
            this._GetObjectField = new NativeFunction(
                this.env.readPointer().add(95 * Process.pointerSize).readPointer(),
                "pointer",
                ["pointer", "pointer", "pointer"]
            );
        }
        return this._GetObjectField;
    }

    get GetBooleanField(): NativeFunction {
        if (this._GetBooleanField === undefined) {
            this._GetBooleanField = new NativeFunction(
                this.env.readPointer().add(96 * Process.pointerSize).readPointer(),
                "bool",
                ["pointer", "pointer", "pointer"]
            );
        }
        return this._GetBooleanField;
    }

    get GetByteField(): NativeFunction {
        if (this._GetByteField === undefined) {
            this._GetByteField = new NativeFunction(
                this.env.readPointer().add(97 * Process.pointerSize).readPointer(),
                "int8",
                ["pointer", "pointer", "pointer"]
            );
        }
        return this._GetByteField;
    }

    get GetCharField(): NativeFunction {
        if (this._GetCharField === undefined) {
            this._GetCharField = new NativeFunction(
                this.env.readPointer().add(98 * Process.pointerSize).readPointer(),
                "uint16",
                ["pointer", "pointer", "pointer"]
            );
        }
        return this._GetCharField;
    }

    get GetShortField(): NativeFunction {
        if (this._GetShortField === undefined) {
            this._GetShortField = new NativeFunction(
                this.env.readPointer().add(99 * Process.pointerSize).readPointer(),
                "int16",
                ["pointer", "pointer", "pointer"]
            );
        }
        return this._GetShortField;
    }

    get GetIntField(): NativeFunction {
        if (this._GetIntField === undefined) {
            this._GetIntField = new NativeFunction(
                this.env.readPointer().add(100 * Process.pointerSize).readPointer(),
                "int32",
                ["pointer", "pointer", "pointer"]
            );
        }
        return this._GetIntField;
    }

    get GetLongField(): NativeFunction {
        if (this._GetLongField === undefined) {
            this._GetLongField = new NativeFunction(
                this.env.readPointer().add(101 * Process.pointerSize).readPointer(),
                "int64",
                ["pointer", "pointer", "pointer"]
            );
        }
        return this._GetLongField;
    }

    get GetFloatField(): NativeFunction {
        if (this._GetFloatField === undefined) {
            this._GetFloatField = new NativeFunction(
                this.env.readPointer().add(102 * Process.pointerSize).readPointer(),
                "float",
                ["pointer", "pointer", "pointer"]
            );
        }
        return this._GetFloatField;
    }

    get GetDoubleField(): NativeFunction {
        if (this._GetDoubleField === undefined) {
            this._GetDoubleField = new NativeFunction(
                this.env.readPointer().add(103 * Process.pointerSize).readPointer(),
                "double",
                ["pointer", "pointer", "pointer"]
            );
        }
        return this._GetDoubleField;
    }

    get SetObjectField(): NativeFunction {
        if (this._SetObjectField === undefined) {
            this._SetObjectField = new NativeFunction(
                this.env.readPointer().add(104 * Process.pointerSize).readPointer(),
                "void",
                ["pointer", "pointer", "pointer", "pointer"]
            );
        }
        return this._SetObjectField;
    }

    get SetBooleanField(): NativeFunction {
        if (this._SetBooleanField === undefined) {
            this._SetBooleanField = new NativeFunction(
                this.env.readPointer().add(105 * Process.pointerSize).readPointer(),
                "void",
                ["pointer", "pointer", "pointer", "bool"]
            );
        }
        return this.SetBooleanField;
    }

    get SetByteField(): NativeFunction {
        if (this._SetByteField === undefined) {
            this._SetByteField = new NativeFunction(
                this.env.readPointer().add(106 * Process.pointerSize).readPointer(),
                "void",
                ["pointer", "pointer", "pointer", "int8"]
            );
        }
        return this._SetByteField;
    }

    get SetCharField(): NativeFunction {
        if (this._SetCharField === undefined) {
            this._SetCharField = new NativeFunction(
                this.env.readPointer().add(107 * Process.pointerSize).readPointer(),
                "void",
                ["pointer", "pointer", "pointer", "uint16"]
            );
        }
        return this._SetCharField;
    }

    get SetShortField(): NativeFunction {
        if (this._SetShortField === undefined) {
            this._SetShortField = new NativeFunction(
                this.env.readPointer().add(108 * Process.pointerSize).readPointer(),
                "void",
                ["pointer", "pointer", "pointer", "int16"]
            );
        }
        return this._SetShortField;
    }

    get SetIntField(): NativeFunction {
        if (this._SetIntField === undefined) {
            this._SetIntField = new NativeFunction(
                this.env.readPointer().add(109 * Process.pointerSize).readPointer(),
                "void",
                ["pointer", "pointer", "pointer", "int32"]
            );
        }
        return this._SetIntField;
    }

    get SetLongField(): NativeFunction {
        if (this._SetLongField === undefined) {
            this._SetLongField = new NativeFunction(
                this.env.readPointer().add(110 * Process.pointerSize).readPointer(),
                "void",
                ["pointer", "pointer", "pointer", "int64"]
            );
        }
        return this._SetLongField;
    }

    get SetFloatField(): NativeFunction {
        if (this._SetFloatField === undefined) {
            this._SetFloatField = new NativeFunction(
                this.env.readPointer().add(111 * Process.pointerSize).readPointer(),
                "void",
                ["pointer", "pointer", "pointer", "float"]
            );
        }
        return this._SetFloatField;
    }

    get SetDoubleField(): NativeFunction {
        if (this._SetDoubleField === undefined) {
            this._SetDoubleField = new NativeFunction(
                this.env.readPointer().add(112 * Process.pointerSize).readPointer(),
                "void",
                ["pointer", "pointer", "pointer", "double"]
            );
        }
        return this._SetDoubleField;
    }

    get GetStaticMethodID(): NativeFunction {
        if (this._GetStaticMethodID === undefined) {
            this._GetStaticMethodID = new NativeFunction(
                this.env.readPointer().add(113 * Process.pointerSize).readPointer(),
                "pointer",
                ["pointer", "pointer", "pointer", "pointer"]
            );
        }
        return this._GetStaticMethodID;
    }

    get CallStaticObjectMethodA(): NativeFunction {
        if (this._CallStaticObjectMethodA === undefined) {
            this._CallStaticObjectMethodA = new NativeFunction(
                this.env.readPointer().add(116 * Process.pointerSize).readPointer(),
                "pointer",
                ["pointer", "pointer", "pointer", "pointer"]
            );
        }
        return this._CallStaticObjectMethodA;
    }

    get CallStaticBooleanMethodA(): NativeFunction {
        if (this._CallStaticBooleanMethodA === undefined) {
            this._CallStaticBooleanMethodA = new NativeFunction(
                this.env.readPointer().add(119 * Process.pointerSize).readPointer(),
                "bool",
                ["pointer", "pointer", "pointer", "pointer"]
            );
        }
        return this._CallStaticBooleanMethodA;
    }

    get CallStaticByteMethodA(): NativeFunction {
        if (this._CallStaticByteMethodA === undefined) {
            this._CallStaticByteMethodA = new NativeFunction(
                this.env.readPointer().add(122 * Process.pointerSize).readPointer(),
                "int8",
                ["pointer", "pointer", "pointer", "pointer"]
            );
        }
        return this._CallStaticByteMethodA;
    }

    get CallStaticCharMethodA(): NativeFunction {
        if (this._CallStaticCharMethodA === undefined) {
            this._CallStaticCharMethodA = new NativeFunction(
                this.env.readPointer().add(125 * Process.pointerSize).readPointer(),
                "uint16",
                ["pointer", "pointer", "pointer", "pointer"]
            );
        }
        return this._CallStaticCharMethodA;
    }

    get CallStaticShortMethodA(): NativeFunction {
        if (this._CallStaticShortMethodA === undefined) {
            this._CallStaticShortMethodA = new NativeFunction(
                this.env.readPointer().add(128 * Process.pointerSize).readPointer(),
                "int16",
                ["pointer", "pointer", "pointer", "pointer"]
            );
        }
        return this._CallStaticShortMethodA;
    }

    get CallStaticIntMethodA(): NativeFunction {
        if (this._CallStaticIntMethodA === undefined) {
            this._CallStaticIntMethodA = new NativeFunction(
                this.env.readPointer().add(131 * Process.pointerSize).readPointer(),
                "int32",
                ["pointer", "pointer", "pointer", "pointer"]
            );
        }
        return this._CallStaticIntMethodA;
    }

    get CallStaticLongMethodA(): NativeFunction {
        if (this._CallStaticLongMethodA === undefined) {
            this._CallStaticLongMethodA = new NativeFunction(
                this.env.readPointer().add(134 * Process.pointerSize).readPointer(),
                "int64",
                ["pointer", "pointer", "pointer", "pointer"]
            );
        }
        return this._CallStaticLongMethodA;
    }

    get CallStaticFloatMethodA(): NativeFunction {
        if (this._CallStaticFloatMethodA === undefined) {
            this._CallStaticFloatMethodA = new NativeFunction(
                this.env.readPointer().add(137 * Process.pointerSize).readPointer(),
                "float",
                ["pointer", "pointer", "pointer", "pointer"]
            );
        }
        return this._CallStaticFloatMethodA;
    }

    get CallStaticDoubleMethodA(): NativeFunction {
        if (this._CallStaticDoubleMethodA === undefined) {
            this._CallStaticDoubleMethodA = new NativeFunction(
                this.env.readPointer().add(140 * Process.pointerSize).readPointer(),
                "double",
                ["pointer", "pointer", "pointer", "pointer"]
            );
        }
        return this._CallStaticDoubleMethodA;
    }

    get CallStaticVoidMethodA(): NativeFunction {
        if (this._CallStaticVoidMethodA === undefined) {
            this._CallStaticVoidMethodA = new NativeFunction(
                this.env.readPointer().add(143 * Process.pointerSize).readPointer(),
                "void",
                ["pointer", "pointer", "pointer", "pointer"]
            );
        }
        return this._CallStaticVoidMethodA;
    }

    get GetStaticFieldID(): NativeFunction {
        if (this._GetStaticFieldID === undefined) {
            this._GetStaticFieldID = new NativeFunction(
                this.env.readPointer().add(144 * Process.pointerSize).readPointer(),
                "pointer",
                ["pointer", "pointer", "pointer", "pointer"]
            );
        }
        return this._GetStaticFieldID;
    }

    get GetStaticObjectField(): NativeFunction {
        if (this._GetStaticObjectField === undefined) {
            this._GetStaticObjectField = new NativeFunction(
                this.env.readPointer().add(145 * Process.pointerSize).readPointer(),
                "pointer",
                ["pointer", "pointer", "pointer"]
            );
        }
        return this._GetStaticObjectField;
    }

    get GetStaticBooleanField(): NativeFunction {
        if (this._GetStaticBooleanField === undefined) {
            this._GetStaticBooleanField = new NativeFunction(
                this.env.readPointer().add(146 * Process.pointerSize).readPointer(),
                "bool",
                ["pointer", "pointer", "pointer"]
            );
        }
        return this._GetStaticBooleanField;
    }

    get GetStaticByteField(): NativeFunction {
        if (this._GetStaticByteField === undefined) {
            this._GetStaticByteField = new NativeFunction(
                this.env.readPointer().add(147 * Process.pointerSize).readPointer(),
                "int8",
                ["pointer", "pointer", "pointer"]
            );
        }
        return this._GetStaticByteField;
    }

    get GetStaticCharField(): NativeFunction {
        if (this._GetStaticCharField === undefined) {
            this._GetStaticCharField = new NativeFunction(
                this.env.readPointer().add(148 * Process.pointerSize).readPointer(),
                "uint16",
                ["pointer", "pointer", "pointer"]
            );
        }
        return this._GetStaticCharField;
    }

    get GetStaticShortField(): NativeFunction {
        if (this._GetStaticShortField === undefined) {
            this._GetStaticShortField = new NativeFunction(
                this.env.readPointer().add(149 * Process.pointerSize).readPointer(),
                "int16",
                ["pointer", "pointer", "pointer"]
            );
        }
        return this._GetStaticShortField;
    }

    get GetStaticIntField(): NativeFunction {
        if (this._GetStaticIntField === undefined) {
            this._GetStaticIntField = new NativeFunction(
                this.env.readPointer().add(150 * Process.pointerSize).readPointer(),
                "int32",
                ["pointer", "pointer", "pointer"]
            );
        }
        return this._GetStaticIntField;
    }


    get GetStaticLongField(): NativeFunction {
        if (this._GetStaticLongField === undefined) {
            this._GetStaticLongField = new NativeFunction(
                this.env.readPointer().add(151 * Process.pointerSize).readPointer(),
                "int64",
                ["pointer", "pointer", "pointer"]
            );
        }
        return this._GetStaticLongField;
    }

    get GetStaticFloatField(): NativeFunction {
        if (this._GetStaticFloatField === undefined) {
            this._GetStaticFloatField = new NativeFunction(
                this.env.readPointer().add(152 * Process.pointerSize).readPointer(),
                "float",
                ["pointer", "pointer", "pointer"]
            );
        }
        return this._GetStaticFloatField;
    }

    get GetStaticDoubleField(): NativeFunction {
        if (this._GetStaticDoubleField === undefined) {
            this._GetStaticDoubleField = new NativeFunction(
                this.env.readPointer().add(153 * Process.pointerSize).readPointer(),
                "double",
                ["pointer", "pointer", "pointer"]
            );
        }
        return this._GetStaticDoubleField;
    }

    get SetStaticObjectField(): NativeFunction {
        if (this._SetStaticObjectField === undefined) {
            this._SetStaticObjectField = new NativeFunction(
                this.env.readPointer().add(154 * Process.pointerSize).readPointer(),
                "void",
                ["pointer", "pointer", "pointer", "pointer"]
            );
        }
        return this._SetStaticObjectField;
    }

    get SetStaticBooleanField(): NativeFunction {
        if (this._SetStaticBooleanField === undefined) {
            this._SetStaticBooleanField = new NativeFunction(
                this.env.readPointer().add(155 * Process.pointerSize).readPointer(),
                "void",
                ["pointer", "pointer", "pointer", "bool"]
            );
        }
        return this._SetStaticBooleanField;
    }

    get SetStaticByteField(): NativeFunction {
        if (this._SetStaticByteField === undefined) {
            this._SetStaticByteField = new NativeFunction(
                this.env.readPointer().add(156 * Process.pointerSize).readPointer(),
                "void",
                ["pointer", "pointer", "pointer", "int8"]
            );
        }
        return this._SetStaticByteField;
    }

    get SetStaticCharField(): NativeFunction {
        if (this._SetStaticCharField === undefined) {
            this._SetStaticCharField = new NativeFunction(
                this.env.readPointer().add(157 * Process.pointerSize).readPointer(),
                "void",
                ["pointer", "pointer", "pointer", "uint16"]
            );
        }
        return this._SetStaticCharField;
    }

    get SetStaticShortField(): NativeFunction {
        if (this._SetStaticShortField === undefined) {
            this._SetStaticShortField = new NativeFunction(
                this.env.readPointer().add(158 * Process.pointerSize).readPointer(),
                "void",
                ["pointer", "pointer", "pointer", "int16"]
            );
        }
        return this._SetStaticShortField;
    }

    get SetStaticIntField(): NativeFunction {
        if (this._SetStaticIntField === undefined) {
            this._SetStaticIntField = new NativeFunction(
                this.env.readPointer().add(159 * Process.pointerSize).readPointer(),
                "void",
                ["pointer", "pointer", "pointer", "int32"]
            );
        }
        return this._SetStaticIntField;
    }

    get SetStaticLongField(): NativeFunction {
        if (this._SetStaticLongField === undefined) {
            this._SetStaticLongField = new NativeFunction(
                this.env.readPointer().add(160 * Process.pointerSize).readPointer(),
                "void",
                ["pointer", "pointer", "pointer", "int64"]
            );
        }
        return this._SetStaticLongField;
    }

    get SetStaticFloatField(): NativeFunction {
        if (this._SetStaticFloatField === undefined) {
            this._SetStaticFloatField = new NativeFunction(
                this.env.readPointer().add(161 * Process.pointerSize).readPointer(),
                "void",
                ["pointer", "pointer", "pointer", "float"]
            );
        }
        return this._SetStaticFloatField;
    }

    get SetStaticDoubleField(): NativeFunction {
        if (this._SetStaticDoubleField === undefined) {
            this._SetStaticDoubleField = new NativeFunction(
                this.env.readPointer().add(162 * Process.pointerSize).readPointer(),
                "void",
                ["pointer", "pointer", "pointer", "double"]
            );
        }
        return this._SetStaticDoubleField;
    }

    get NewString(): NativeFunction {
        if (this._NewString === undefined) {
            this._NewString = new NativeFunction(
                this.env.readPointer().add(163 * Process.pointerSize).readPointer(),
                "pointer",
                ["pointer", "pointer", "int32"]
            );
        }
        return this._NewString;
    }

    get GetStringLength(): NativeFunction {
        if (this._GetStringLength === undefined) {
            this._GetStringLength = new NativeFunction(
                this.env.readPointer().add(164 * Process.pointerSize).readPointer(),
                "int32",
                ["pointer", "pointer"]
            );
        }
        return this._GetStringLength;
    }

    get GetStringChars(): NativeFunction {
        if (this._GetStringChars === undefined) {
            this._GetStringChars = new NativeFunction(
                this.env.readPointer().add(165 * Process.pointerSize).readPointer(),
                "pointer",
                ["pointer", "pointer", "pointer"]
            );
        }
        return this._GetStringChars;
    }

    get ReleaseStringChars(): NativeFunction {
        if (this._ReleaseStringChars === undefined) {
            this._ReleaseStringChars = new NativeFunction(
                this.env.readPointer().add(166 * Process.pointerSize).readPointer(),
                "void",
                ["pointer", "pointer", "pointer"]
            );
        }
        return this._ReleaseStringChars;
    }

    get NewStringUTF(): NativeFunction {
        if (this._NewStringUTF === undefined) {
            this._NewStringUTF = new NativeFunction(
                this.env.readPointer().add(167 * Process.pointerSize).readPointer(),
                "pointer",
                ["pointer", "pointer"]
            );
        }
        return this._NewStringUTF;
    }

    get GetStringUTFLength(): NativeFunction {
        if (this._GetStringUTFLength === undefined) {
            this._GetStringUTFLength = new NativeFunction(
                this.env.readPointer().add(168 * Process.pointerSize).readPointer(),
                "int32",
                ["pointer", "pointer"]
            );
        }
        return this._GetStringUTFLength;
    }

    get GetStringUTFChars(): NativeFunction {
        if (this._GetStringUTFChars === undefined) {
            this._GetStringUTFChars = new NativeFunction(
                this.env.readPointer().add(169 * Process.pointerSize).readPointer(),
                "pointer",
                ["pointer", "pointer", "pointer"]
            );
        }
        return this._GetStringUTFChars;
    }

    get ReleaseStringUTFChars(): NativeFunction {
        if (this._ReleaseStringUTFChars === undefined) {
            this._ReleaseStringUTFChars = new NativeFunction(
                this.env.readPointer().add(170 * Process.pointerSize).readPointer(),
                "void",
                ["pointer", "pointer", "pointer"]
            );
        }
        return this._ReleaseStringUTFChars;
    }

    get GetArrayLength(): NativeFunction {
        if (this._GetArrayLength === undefined) {
            this._GetArrayLength = new NativeFunction(
                this.env.readPointer().add(171 * Process.pointerSize).readPointer(),
                "int32",
                ["pointer", "pointer"]
            );
        }
        return this._GetArrayLength;
    }

    get NewObjectArray(): NativeFunction {
        if (this._NewObjectArray === undefined) {
            this._NewObjectArray = new NativeFunction(
                this.env.readPointer().add(172 * Process.pointerSize).readPointer(),
                "pointer",
                ["pointer", "int32", "pointer", "pointer"]
            );
        }
        return this._NewObjectArray;
    }

    get GetObjectArrayElement(): NativeFunction {
        if (this._GetObjectArrayElement === undefined) {
            this._GetObjectArrayElement = new NativeFunction(
                this.env.readPointer().add(173 * Process.pointerSize).readPointer(),
                "pointer",
                ["pointer", "pointer", "int32"]
            );
        }
        return this._GetObjectArrayElement;
    }

    get SetObjectArrayElement(): NativeFunction {
        if (this._SetObjectArrayElement === undefined) {
            this._SetObjectArrayElement = new NativeFunction(
                this.env.readPointer().add(174 * Process.pointerSize).readPointer(),
                "void",
                ["pointer", "pointer", "int32", "pointer"]
            );
        }
        return this._SetObjectArrayElement;
    }

    get NewBooleanArray(): NativeFunction {
        if (this._NewBooleanArray === undefined) {
            this._NewBooleanArray = new NativeFunction(
                this.env.readPointer().add(175 * Process.pointerSize).readPointer(),
                "pointer",
                ["pointer", "int32"]
            );
        }
        return this._NewBooleanArray;
    }

    get NewByteArray(): NativeFunction {
        if (this._NewByteArray === undefined) {
            this._NewByteArray = new NativeFunction(
                this.env.readPointer().add(176 * Process.pointerSize).readPointer(),
                "pointer",
                ["pointer", "int32"]
            );
        }
        return this._NewByteArray;
    }

    get NewCharArray(): NativeFunction {
        if (this._NewCharArray === undefined) {
            this._NewCharArray = new NativeFunction(
                this.env.readPointer().add(177 * Process.pointerSize).readPointer(),
                "pointer",
                ["pointer", "int32"]
            );
        }
        return this._NewCharArray;
    }

    get NewShortArray(): NativeFunction {
        if (this._NewShortArray === undefined) {
            this._NewShortArray = new NativeFunction(
                this.env.readPointer().add(178 * Process.pointerSize).readPointer(),
                "pointer",
                ["pointer", "int32"]
            );
        }
        return this._NewShortArray;
    }

    get NewIntArray(): NativeFunction {
        if (this._NewIntArray === undefined) {
            this._NewIntArray = new NativeFunction(
                this.env.readPointer().add(179 * Process.pointerSize).readPointer(),
                "pointer",
                ["pointer", "int32"]
            );
        }
        return this._NewIntArray;
    }

    get NewLongArray(): NativeFunction {
        if (this._NewLongArray === undefined) {
            this._NewLongArray = new NativeFunction(
                this.env.readPointer().add(180 * Process.pointerSize).readPointer(),
                "pointer",
                ["pointer", "int32"]
            );
        }
        return this._NewLongArray;
    }

    get NewFloatArray(): NativeFunction {
        if (this._NewFloatArray === undefined) {
            this._NewFloatArray = new NativeFunction(
                this.env.readPointer().add(181 * Process.pointerSize).readPointer(),
                "pointer",
                ["pointer", "int32"]
            );
        }
        return this._NewFloatArray;
    }

    get NewDoubleArray(): NativeFunction {
        if (this._NewDoubleArray=== undefined) {
            this._NewDoubleArray = new NativeFunction(
                this.env.readPointer().add(182 * Process.pointerSize).readPointer(),
                "pointer",
                ["pointer", "int32"]
            );
        }
        return this._NewDoubleArray;
    }

    get GetBooleanArrayElements(): NativeFunction {
        if (this._GetBooleanArrayElements === undefined) {
            this._GetBooleanArrayElements = new NativeFunction(
                this.env.readPointer().add(183 * Process.pointerSize).readPointer(),
                "pointer",
                ["pointer", "pointer", "pointer"]
            );
        }
        return this._GetBooleanArrayElements;
    }

    get GetByteArrayElements(): NativeFunction {
        if (this._GetByteArrayElements === undefined) {
            this._GetByteArrayElements = new NativeFunction(
                this.env.readPointer().add(184 * Process.pointerSize).readPointer(),
                "pointer",
                ["pointer", "pointer", "pointer"]
            );
        }
        return this._GetByteArrayElements;
    }

    get GetCharArrayElements(): NativeFunction {
        if (this._GetCharArrayElements === undefined) {
            this._GetCharArrayElements = new NativeFunction(
                this.env.readPointer().add(185 * Process.pointerSize).readPointer(),
                "pointer",
                ["pointer", "pointer", "pointer"]
            );
        }
        return this._GetCharArrayElements;
    }

    get GetShortArrayElements(): NativeFunction {
        if (this._GetShortArrayElements === undefined) {
            this._GetShortArrayElements = new NativeFunction(
                this.env.readPointer().add(186 * Process.pointerSize).readPointer(),
                "pointer",
                ["pointer", "pointer", "pointer"]
            );
        }
        return this._GetShortArrayElements;
    }

    get GetIntArrayElements(): NativeFunction {
        if (this._GetIntArrayElements === undefined) {
            this._GetIntArrayElements = new NativeFunction(
                this.env.readPointer().add(187 * Process.pointerSize).readPointer(),
                "pointer",
                ["pointer", "pointer", "pointer"]
            );
        }
        return this._GetIntArrayElements;
    }

    get GetLongArrayElements(): NativeFunction {
        if (this._GetLongArrayElements === undefined) {
            this._GetLongArrayElements = new NativeFunction(
                this.env.readPointer().add(188 * Process.pointerSize).readPointer(),
                "pointer",
                ["pointer", "pointer", "pointer"]
            );
        }
        return this._GetLongArrayElements;
    }

    get GetFloatArrayElements(): NativeFunction {
        if (this._GetFloatArrayElements === undefined) {
            this._GetFloatArrayElements = new NativeFunction(
                this.env.readPointer().add(189 * Process.pointerSize).readPointer(),
                "pointer",
                ["pointer", "pointer", "pointer"]
            );
        }
        return this._GetFloatArrayElements;
    }

    get GetDoubleArrayElements(): NativeFunction {
        if (this._GetDoubleArrayElements === undefined) {
            this._GetDoubleArrayElements = new NativeFunction(
                this.env.readPointer().add(190 * Process.pointerSize).readPointer(),
                "pointer",
                ["pointer", "pointer", "pointer"]
            );
        }
        return this._GetDoubleArrayElements;
    }

    get ReleaseBooleanArrayElements(): NativeFunction {
        if (this._ReleaseBooleanArrayElements === undefined) {
            this._ReleaseBooleanArrayElements = new NativeFunction(
                this.env.readPointer().add(191 * Process.pointerSize).readPointer(),
                "void",
                ["pointer", "pointer", "pointer", "int32"]
            );
        }
        return this._ReleaseBooleanArrayElements;
    }

    get ReleaseByteArrayElements(): NativeFunction {
        if (this._ReleaseByteArrayElements === undefined) {
            this._ReleaseByteArrayElements = new NativeFunction(
                this.env.readPointer().add(192 * Process.pointerSize).readPointer(),
                "void",
                ["pointer", "pointer", "pointer", "int32"]
            );
        }
        return this._ReleaseByteArrayElements;
    }

    get ReleaseCharArrayElements(): NativeFunction {
        if (this._ReleaseCharArrayElements === undefined) {
            this._ReleaseCharArrayElements = new NativeFunction(
                this.env.readPointer().add(193 * Process.pointerSize).readPointer(),
                "void",
                ["pointer", "pointer", "pointer", "int32"]
            );
        }
        return this._ReleaseCharArrayElements;
    }

    get ReleaseShortArrayElements(): NativeFunction {
        if (this._ReleaseShortArrayElements === undefined) {
            this._ReleaseShortArrayElements = new NativeFunction(
                this.env.readPointer().add(194 * Process.pointerSize).readPointer(),
                "void",
                ["pointer", "pointer", "pointer", "int32"]
            );
        }
        return this._ReleaseShortArrayElements;
    }

    get ReleaseIntArrayElements(): NativeFunction {
        if (this._ReleaseIntArrayElements === undefined) {
            this._ReleaseIntArrayElements = new NativeFunction(
                this.env.readPointer().add(195 * Process.pointerSize).readPointer(),
                "void",
                ["pointer", "pointer", "pointer", "int32"]
            );
        }
        return this._ReleaseIntArrayElements;
    }

    get ReleaseLongArrayElements(): NativeFunction {
        if (this._ReleaseLongArrayElements === undefined) {
            this._ReleaseLongArrayElements = new NativeFunction(
                this.env.readPointer().add(196 * Process.pointerSize).readPointer(),
                "void",
                ["pointer", "pointer", "pointer", "int32"]
            );
        }
        return this._ReleaseLongArrayElements;
    }

    get ReleaseFloatArrayElements(): NativeFunction {
        if (this._ReleaseFloatArrayElements === undefined) {
            this._ReleaseFloatArrayElements = new NativeFunction(
                this.env.readPointer().add(197 * Process.pointerSize).readPointer(),
                "void",
                ["pointer", "pointer", "pointer", "int32"]
            );
        }
        return this._ReleaseFloatArrayElements;
    }

    get ReleaseDoubleArrayElements(): NativeFunction {
        if (this._ReleaseDoubleArrayElements === undefined) {
            this._ReleaseDoubleArrayElements = new NativeFunction(
                this.env.readPointer().add(198 * Process.pointerSize).readPointer(),
                "void",
                ["pointer", "pointer", "pointer", "int32"]
            );
        }
        return this._ReleaseDoubleArrayElements;
    }

    get GetBooleanArrayRegion(): NativeFunction {
        if (this._GetBooleanArrayRegion === undefined) {
            this._GetBooleanArrayRegion = new NativeFunction(
                this.env.readPointer().add(199 * Process.pointerSize).readPointer(),
                "void",
                ["pointer", "pointer", "int32", "int32", "pointer"]
            );
        }
        return this._GetBooleanArrayRegion;
    }


    get GetByteArrayRegion(): NativeFunction {
        if (this._GetByteArrayRegion === undefined) {
            this._GetByteArrayRegion = new NativeFunction(
                this.env.readPointer().add(200 * Process.pointerSize).readPointer(),
                "void",
                ["pointer", "pointer", "int32", "int32", "pointer"]
            );
        }
        return this._GetByteArrayRegion;
    }

    get GetCharArrayRegion(): NativeFunction {
        if (this._GetCharArrayRegion === undefined) {
            this._GetCharArrayRegion = new NativeFunction(
                this.env.readPointer().add(201 * Process.pointerSize).readPointer(),
                "void",
                ["pointer", "pointer", "int32", "int32", "pointer"]
            );
        }
        return this._GetCharArrayRegion;
    }

    get GetShortArrayRegion(): NativeFunction {
        if (this._GetShortArrayRegion === undefined) {
            this._GetShortArrayRegion = new NativeFunction(
                this.env.readPointer().add(202 * Process.pointerSize).readPointer(),
                "void",
                ["pointer", "pointer", "int32", "int32", "pointer"]
            );
        }
        return this._GetShortArrayRegion;
    }

    get GetIntArrayRegion(): NativeFunction {
        if (this._GetIntArrayRegion === undefined) {
            this._GetIntArrayRegion = new NativeFunction(
                this.env.readPointer().add(203 * Process.pointerSize).readPointer(),
                "void",
                ["pointer", "pointer", "int32", "int32", "pointer"]
            );
        }
        return this._GetIntArrayRegion;
    }

    get GetLongArrayRegion(): NativeFunction {
        if (this._GetLongArrayRegion === undefined) {
            this._GetLongArrayRegion = new NativeFunction(
                this.env.readPointer().add(204 * Process.pointerSize).readPointer(),
                "void",
                ["pointer", "pointer", "int32", "int32", "pointer"]
            );
        }
        return this._GetLongArrayRegion;
    }

    get GetFloatArrayRegion(): NativeFunction {
        if (this._GetFloatArrayRegion === undefined) {
            this._GetFloatArrayRegion = new NativeFunction(
                this.env.readPointer().add(205 * Process.pointerSize).readPointer(),
                "void",
                ["pointer", "pointer", "int32", "int32", "pointer"]
            );
        }
        return this._GetFloatArrayRegion;
    }

    get GetDoubleArrayRegion(): NativeFunction {
        if (this._GetDoubleArrayRegion === undefined) {
            this._GetDoubleArrayRegion = new NativeFunction(
                this.env.readPointer().add(206 * Process.pointerSize).readPointer(),
                "void",
                ["pointer", "pointer", "int32", "int32", "pointer"]
            );
        }
        return this._GetDoubleArrayRegion;
    }

    get SetBooleanArrayRegion(): NativeFunction {
        if (this._SetBooleanArrayRegion === undefined) {
            this._SetBooleanArrayRegion = new NativeFunction(
                this.env.readPointer().add(207 * Process.pointerSize).readPointer(),
                "void",
                ["pointer", "pointer", "int32", "int32", "pointer"]
            );
        }
        return this._SetBooleanArrayRegion;
    }

    get SetByteArrayRegion(): NativeFunction {
        if (this._SetByteArrayRegion === undefined) {
            this._SetByteArrayRegion = new NativeFunction(
                this.env.readPointer().add(208 * Process.pointerSize).readPointer(),
                "void",
                ["pointer", "pointer", "int32", "int32", "pointer"]
            );
        }
        return this._SetByteArrayRegion;
    }

    get SetCharArrayRegion(): NativeFunction {
        if (this._SetCharArrayRegion === undefined) {
            this._SetCharArrayRegion = new NativeFunction(
                this.env.readPointer().add(209 * Process.pointerSize).readPointer(),
                "void",
                ["pointer", "pointer", "int32", "int32", "pointer"]
            );
        }
        return this._SetCharArrayRegion;
    }

    get SetShortArrayRegion(): NativeFunction {
        if (this._SetShortArrayRegion === undefined) {
            this._SetShortArrayRegion = new NativeFunction(
                this.env.readPointer().add(210 * Process.pointerSize).readPointer(),
                "void",
                ["pointer", "pointer", "int32", "int32", "pointer"]
            );
        }
        return this._SetShortArrayRegion;
    }

    get SetIntArrayRegion(): NativeFunction {
        if (this._SetIntArrayRegion === undefined) {
            this._SetIntArrayRegion = new NativeFunction(
                this.env.readPointer().add(211 * Process.pointerSize).readPointer(),
                "void",
                ["pointer", "pointer", "int32", "int32", "pointer"]
            );
        }
        return this._SetIntArrayRegion;
    }

    get SetLongArrayRegion(): NativeFunction {
        if (this._SetLongArrayRegion === undefined) {
            this._SetLongArrayRegion = new NativeFunction(
                this.env.readPointer().add(212 * Process.pointerSize).readPointer(),
                "void",
                ["pointer", "pointer", "int32", "int32", "pointer"]
            );
        }
        return this._SetLongArrayRegion;
    }

    get SetFloatArrayRegion(): NativeFunction {
        if (this._SetFloatArrayRegion === undefined) {
            this._SetFloatArrayRegion = new NativeFunction(
                this.env.readPointer().add(213 * Process.pointerSize).readPointer(),
                "void",
                ["pointer", "pointer", "int32", "int32", "pointer"]
            );
        }
        return this._SetFloatArrayRegion;
    }


    get SetDoubleArrayRegion(): NativeFunction {
        if (this._SetDoubleArrayRegion === undefined) {
            this._SetDoubleArrayRegion = new NativeFunction(
                this.env.readPointer().add(214 * Process.pointerSize).readPointer(),
                "void",
                ["pointer", "pointer", "int32", "int32", "pointer"]
            );
        }
        return this._SetDoubleArrayRegion;
    }

    get RegisterNatives(): NativeFunction {
        if (this._RegisterNatives === undefined) {
            this._RegisterNatives = new NativeFunction(
                this.env.readPointer().add(215 * Process.pointerSize).readPointer(),
                "int32",
                ["pointer", "pointer", "pointer", "int32"]
            );
        }
        return this._RegisterNatives;
    }

    get UnregisterNatives(): NativeFunction {
        if (this._UnregisterNatives === undefined) {
            this._UnregisterNatives = new NativeFunction(
                this.env.readPointer().add(216 * Process.pointerSize).readPointer(),
                "int32",
                ["pointer", "pointer"]
            );
        }
        return this._UnregisterNatives;
    }

    get MonitorEnter(): NativeFunction {
        if (this._MonitorEnter === undefined) {
            this._MonitorEnter = new NativeFunction(
                this.env.readPointer().add(217 * Process.pointerSize).readPointer(),
                "int32",
                ["pointer", "pointer"]
            );
        }
        return this._MonitorEnter;
    }

    get MonitorExit(): NativeFunction {
        if (this._MonitorExit === undefined) {
            this._MonitorExit = new NativeFunction(
                this.env.readPointer().add(218 * Process.pointerSize).readPointer(),
                "int32",
                ["pointer", "pointer"]
            );
        }
        return this._MonitorExit;
    }

    get GetJavaVM(): NativeFunction {
        if (this._GetJavaVM === undefined) {
            this._GetJavaVM = new NativeFunction(
                this.env.readPointer().add(219 * Process.pointerSize).readPointer(),
                "int32",
                ["pointer", "pointer"]
            );
        }
        return this._GetJavaVM;
    }

    get GetStringRegion(): NativeFunction {
        if (this._GetStringRegion === undefined) {
            this._GetStringRegion = new NativeFunction(
                this.env.readPointer().add(220 * Process.pointerSize).readPointer(),
                "void",
                ["pointer", "pointer", "int32", "int32", "pointer"]
            );
        }
        return this._GetStringRegion;
    }

    get GetStringUTFRegion(): NativeFunction {
        if (this._GetStringUTFRegion === undefined) {
            this._GetStringUTFRegion = new NativeFunction(
                this.env.readPointer().add(221 * Process.pointerSize).readPointer(),
                "void",
                ["pointer", "pointer", "int32", "int32", "pointer"]
            );
        }
        return this._GetStringUTFRegion;
    }

    get GetPrimitiveArrayCritical(): NativeFunction {
        if (this._GetPrimitiveArrayCritical === undefined) {
            this._GetPrimitiveArrayCritical = new NativeFunction(
                this.env.readPointer().add(222 * Process.pointerSize).readPointer(),
                "pointer",
                ["pointer", "pointer", "pointer"]
            );
        }
        return this._GetPrimitiveArrayCritical;
    }

    get ReleasePrimitiveArrayCritical(): NativeFunction {
        if (this._ReleasePrimitiveArrayCritical === undefined) {
            this._ReleasePrimitiveArrayCritical = new NativeFunction(
                this.env.readPointer().add(223 * Process.pointerSize).readPointer(),
                "void",
                ["pointer", "pointer", "pointer", "int32"]
            );
        }
        return this._ReleasePrimitiveArrayCritical;
    }

    get GetStringCritical(): NativeFunction {
        if (this._GetStringCritical === undefined) {
            this._GetStringCritical = new NativeFunction(
                this.env.readPointer().add(224 * Process.pointerSize).readPointer(),
                "pointer",
                ["pointer", "pointer", "pointer"]
            );
        }
        return this._GetStringCritical;
    }

    get ReleaseStringCritical(): NativeFunction {
        if (this._ReleaseStringCritical === undefined) {
            this._ReleaseStringCritical = new NativeFunction(
                this.env.readPointer().add(225 * Process.pointerSize).readPointer(),
                "void",
                ["pointer", "pointer", "pointer"]
            );
        }
        return this._ReleaseStringCritical;
    }

    get NewWeakGlobalRef(): NativeFunction {
        if (this._NewWeakGlobalRef === undefined) {
            this._NewWeakGlobalRef = new NativeFunction(
                this.env.readPointer().add(226 * Process.pointerSize).readPointer(),
                "pointer",
                ["pointer", "pointer"]
            );
        }
        return this._NewWeakGlobalRef;
    }

    get DeleteWeakGlobalRef(): NativeFunction {
        if (this._DeleteWeakGlobalRef === undefined) {
            this._DeleteWeakGlobalRef = new NativeFunction(
                this.env.readPointer().add(227 * Process.pointerSize).readPointer(),
                "void",
                ["pointer", "pointer"]
            );
        }
        return this._DeleteWeakGlobalRef;
    }

    get ExceptionCheck(): NativeFunction {
        if (this._ExceptionCheck === undefined) {
            this._ExceptionCheck = new NativeFunction(
                this.env.readPointer().add(228 * Process.pointerSize).readPointer(),
                "bool",
                ["pointer"]
            );
        }
        return this._ExceptionCheck;
    }

    get NewDirectByteBuffer(): NativeFunction {
        if (this._NewDirectByteBuffer === undefined) {
            this._NewDirectByteBuffer = new NativeFunction(
                this.env.readPointer().add(229 * Process.pointerSize).readPointer(),
                "pointer",
                ["pointer", "pointer", "int64"]
            );
        }
        return this._NewDirectByteBuffer;
    }

    get GetDirectBufferAddress(): NativeFunction {
        if (this._GetDirectBufferAddress === undefined) {
            this._GetDirectBufferAddress = new NativeFunction(
                this.env.readPointer().add(230 * Process.pointerSize).readPointer(),
                "pointer",
                ["pointer", "pointer"]
            );
        }
        return this._GetDirectBufferAddress;
    }

    get GetDirectBufferCapacity(): NativeFunction {
        if (this._GetDirectBufferCapacity === undefined) {
            this._GetDirectBufferCapacity = new NativeFunction(
                this.env.readPointer().add(231 * Process.pointerSize).readPointer(),
                "int64",
                ["pointer", "pointer"]
            );
        }
        return this._GetDirectBufferCapacity;
    }

    get GetObjectRefType(): NativeFunction {
        if (this._GetObjectRefType === undefined) {
            this._GetObjectRefType = new NativeFunction(
                this.env.readPointer().add(232 * Process.pointerSize).readPointer(),
                "pointer",
                ["pointer", "pointer"]
            );
        }
        return this._GetObjectRefType;
    }
}
