// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  EthereumCall,
  EthereumEvent,
  SmartContract,
  EthereumValue,
  JSONValue,
  TypedMap,
  Entity,
  EthereumTuple,
  Bytes,
  Address,
  BigInt,
  CallResult
} from "@graphprotocol/graph-ts";

export class SummonYeetComplete extends EthereumEvent {
  get params(): SummonYeetComplete__Params {
    return new SummonYeetComplete__Params(this);
  }
}

export class SummonYeetComplete__Params {
  _event: SummonYeetComplete;

  constructor(event: SummonYeetComplete) {
    this._event = event;
  }

  get moloch(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get uhMoloch(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get wrapper(): Address {
    return this._event.parameters[2].value.toAddress();
  }

  get maxTarget(): BigInt {
    return this._event.parameters[3].value.toBigInt();
  }

  get raiseEndTime(): BigInt {
    return this._event.parameters[4].value.toBigInt();
  }

  get raiseStartTime(): BigInt {
    return this._event.parameters[5].value.toBigInt();
  }

  get maxUnits(): BigInt {
    return this._event.parameters[6].value.toBigInt();
  }

  get pricePerUnit(): BigInt {
    return this._event.parameters[7].value.toBigInt();
  }
}

export class YeeterFactory extends SmartContract {
  static bind(address: Address): YeeterFactory {
    return new YeeterFactory("YeeterFactory", address);
  }

  summonYeet(
    _moloch: Address,
    _uhMoloch: Address,
    _wrapper: Address,
    _maxTarget: BigInt,
    _raiseEndTime: BigInt,
    _raiseStartTime: BigInt,
    _maxUnits: BigInt,
    _pricePerUnit: BigInt
  ): Address {
    let result = super.call("summonYeet", [
      EthereumValue.fromAddress(_moloch),
      EthereumValue.fromAddress(_uhMoloch),
      EthereumValue.fromAddress(_wrapper),
      EthereumValue.fromUnsignedBigInt(_maxTarget),
      EthereumValue.fromUnsignedBigInt(_raiseEndTime),
      EthereumValue.fromUnsignedBigInt(_raiseStartTime),
      EthereumValue.fromUnsignedBigInt(_maxUnits),
      EthereumValue.fromUnsignedBigInt(_pricePerUnit)
    ]);

    return result[0].toAddress();
  }

  try_summonYeet(
    _moloch: Address,
    _uhMoloch: Address,
    _wrapper: Address,
    _maxTarget: BigInt,
    _raiseEndTime: BigInt,
    _raiseStartTime: BigInt,
    _maxUnits: BigInt,
    _pricePerUnit: BigInt
  ): CallResult<Address> {
    let result = super.tryCall("summonYeet", [
      EthereumValue.fromAddress(_moloch),
      EthereumValue.fromAddress(_uhMoloch),
      EthereumValue.fromAddress(_wrapper),
      EthereumValue.fromUnsignedBigInt(_maxTarget),
      EthereumValue.fromUnsignedBigInt(_raiseEndTime),
      EthereumValue.fromUnsignedBigInt(_raiseStartTime),
      EthereumValue.fromUnsignedBigInt(_maxUnits),
      EthereumValue.fromUnsignedBigInt(_pricePerUnit)
    ]);
    if (result.reverted) {
      return new CallResult();
    }
    let value = result.value;
    return CallResult.fromValue(value[0].toAddress());
  }

  template(): Address {
    let result = super.call("template", []);

    return result[0].toAddress();
  }

  try_template(): CallResult<Address> {
    let result = super.tryCall("template", []);
    if (result.reverted) {
      return new CallResult();
    }
    let value = result.value;
    return CallResult.fromValue(value[0].toAddress());
  }

  yeetIdx(): BigInt {
    let result = super.call("yeetIdx", []);

    return result[0].toBigInt();
  }

  try_yeetIdx(): CallResult<BigInt> {
    let result = super.tryCall("yeetIdx", []);
    if (result.reverted) {
      return new CallResult();
    }
    let value = result.value;
    return CallResult.fromValue(value[0].toBigInt());
  }

  yeeters(param0: BigInt): Address {
    let result = super.call("yeeters", [
      EthereumValue.fromUnsignedBigInt(param0)
    ]);

    return result[0].toAddress();
  }

  try_yeeters(param0: BigInt): CallResult<Address> {
    let result = super.tryCall("yeeters", [
      EthereumValue.fromUnsignedBigInt(param0)
    ]);
    if (result.reverted) {
      return new CallResult();
    }
    let value = result.value;
    return CallResult.fromValue(value[0].toAddress());
  }
}

export class ConstructorCall extends EthereumCall {
  get inputs(): ConstructorCall__Inputs {
    return new ConstructorCall__Inputs(this);
  }

  get outputs(): ConstructorCall__Outputs {
    return new ConstructorCall__Outputs(this);
  }
}

export class ConstructorCall__Inputs {
  _call: ConstructorCall;

  constructor(call: ConstructorCall) {
    this._call = call;
  }

  get _template(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class ConstructorCall__Outputs {
  _call: ConstructorCall;

  constructor(call: ConstructorCall) {
    this._call = call;
  }
}

export class SummonYeetCall extends EthereumCall {
  get inputs(): SummonYeetCall__Inputs {
    return new SummonYeetCall__Inputs(this);
  }

  get outputs(): SummonYeetCall__Outputs {
    return new SummonYeetCall__Outputs(this);
  }
}

export class SummonYeetCall__Inputs {
  _call: SummonYeetCall;

  constructor(call: SummonYeetCall) {
    this._call = call;
  }

  get _moloch(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get _uhMoloch(): Address {
    return this._call.inputValues[1].value.toAddress();
  }

  get _wrapper(): Address {
    return this._call.inputValues[2].value.toAddress();
  }

  get _maxTarget(): BigInt {
    return this._call.inputValues[3].value.toBigInt();
  }

  get _raiseEndTime(): BigInt {
    return this._call.inputValues[4].value.toBigInt();
  }

  get _raiseStartTime(): BigInt {
    return this._call.inputValues[5].value.toBigInt();
  }

  get _maxUnits(): BigInt {
    return this._call.inputValues[6].value.toBigInt();
  }

  get _pricePerUnit(): BigInt {
    return this._call.inputValues[7].value.toBigInt();
  }
}

export class SummonYeetCall__Outputs {
  _call: SummonYeetCall;

  constructor(call: SummonYeetCall) {
    this._call = call;
  }

  get value0(): Address {
    return this._call.outputValues[0].value.toAddress();
  }
}
