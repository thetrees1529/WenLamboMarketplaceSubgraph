// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  ethereum,
  JSONValue,
  TypedMap,
  Entity,
  Bytes,
  Address,
  BigInt
} from "@graphprotocol/graph-ts";

export class Cancelled extends ethereum.Event {
  get params(): Cancelled__Params {
    return new Cancelled__Params(this);
  }
}

export class Cancelled__Params {
  _event: Cancelled;

  constructor(event: Cancelled) {
    this._event = event;
  }

  get listingId(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }
}

export class FeeSet extends ethereum.Event {
  get params(): FeeSet__Params {
    return new FeeSet__Params(this);
  }
}

export class FeeSet__Params {
  _event: FeeSet;

  constructor(event: FeeSet) {
    this._event = event;
  }

  get fee(): FeeSetFeeStruct {
    return changetype<FeeSetFeeStruct>(
      this._event.parameters[0].value.toTuple()
    );
  }
}

export class FeeSetFeeStruct extends ethereum.Tuple {
  get numerator(): BigInt {
    return this[0].toBigInt();
  }

  get denominator(): BigInt {
    return this[1].toBigInt();
  }
}

export class Listed extends ethereum.Event {
  get params(): Listed__Params {
    return new Listed__Params(this);
  }
}

export class Listed__Params {
  _event: Listed;

  constructor(event: Listed) {
    this._event = event;
  }

  get listingId(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }

  get seller(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get tokenId(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }

  get price(): BigInt {
    return this._event.parameters[3].value.toBigInt();
  }

  get expiresAt(): BigInt {
    return this._event.parameters[4].value.toBigInt();
  }
}

export class PriceEdited extends ethereum.Event {
  get params(): PriceEdited__Params {
    return new PriceEdited__Params(this);
  }
}

export class PriceEdited__Params {
  _event: PriceEdited;

  constructor(event: PriceEdited) {
    this._event = event;
  }

  get listingId(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }

  get newPrice(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }
}

export class Sold extends ethereum.Event {
  get params(): Sold__Params {
    return new Sold__Params(this);
  }
}

export class Sold__Params {
  _event: Sold;

  constructor(event: Sold) {
    this._event = event;
  }

  get listingId(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }

  get feesTaken(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }

  get buyer(): Address {
    return this._event.parameters[2].value.toAddress();
  }
}

export class IBuyItNow extends ethereum.SmartContract {
  static bind(address: Address): IBuyItNow {
    return new IBuyItNow("IBuyItNow", address);
  }
}

export class CancelCall extends ethereum.Call {
  get inputs(): CancelCall__Inputs {
    return new CancelCall__Inputs(this);
  }

  get outputs(): CancelCall__Outputs {
    return new CancelCall__Outputs(this);
  }
}

export class CancelCall__Inputs {
  _call: CancelCall;

  constructor(call: CancelCall) {
    this._call = call;
  }

  get listingId(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }
}

export class CancelCall__Outputs {
  _call: CancelCall;

  constructor(call: CancelCall) {
    this._call = call;
  }
}

export class EditPriceCall extends ethereum.Call {
  get inputs(): EditPriceCall__Inputs {
    return new EditPriceCall__Inputs(this);
  }

  get outputs(): EditPriceCall__Outputs {
    return new EditPriceCall__Outputs(this);
  }
}

export class EditPriceCall__Inputs {
  _call: EditPriceCall;

  constructor(call: EditPriceCall) {
    this._call = call;
  }

  get listingId(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }

  get newPrice(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }
}

export class EditPriceCall__Outputs {
  _call: EditPriceCall;

  constructor(call: EditPriceCall) {
    this._call = call;
  }
}

export class ListCall extends ethereum.Call {
  get inputs(): ListCall__Inputs {
    return new ListCall__Inputs(this);
  }

  get outputs(): ListCall__Outputs {
    return new ListCall__Outputs(this);
  }
}

export class ListCall__Inputs {
  _call: ListCall;

  constructor(call: ListCall) {
    this._call = call;
  }

  get tokenId(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }

  get price(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }

  get expiresAt(): BigInt {
    return this._call.inputValues[2].value.toBigInt();
  }
}

export class ListCall__Outputs {
  _call: ListCall;

  constructor(call: ListCall) {
    this._call = call;
  }
}

export class PurchaseCall extends ethereum.Call {
  get inputs(): PurchaseCall__Inputs {
    return new PurchaseCall__Inputs(this);
  }

  get outputs(): PurchaseCall__Outputs {
    return new PurchaseCall__Outputs(this);
  }
}

export class PurchaseCall__Inputs {
  _call: PurchaseCall;

  constructor(call: PurchaseCall) {
    this._call = call;
  }

  get listingId(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }

  get expectedPrice(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }
}

export class PurchaseCall__Outputs {
  _call: PurchaseCall;

  constructor(call: PurchaseCall) {
    this._call = call;
  }
}

export class SetFeeCall extends ethereum.Call {
  get inputs(): SetFeeCall__Inputs {
    return new SetFeeCall__Inputs(this);
  }

  get outputs(): SetFeeCall__Outputs {
    return new SetFeeCall__Outputs(this);
  }
}

export class SetFeeCall__Inputs {
  _call: SetFeeCall;

  constructor(call: SetFeeCall) {
    this._call = call;
  }

  get fee(): SetFeeCallFeeStruct {
    return changetype<SetFeeCallFeeStruct>(
      this._call.inputValues[0].value.toTuple()
    );
  }
}

export class SetFeeCall__Outputs {
  _call: SetFeeCall;

  constructor(call: SetFeeCall) {
    this._call = call;
  }
}

export class SetFeeCallFeeStruct extends ethereum.Tuple {
  get numerator(): BigInt {
    return this[0].toBigInt();
  }

  get denominator(): BigInt {
    return this[1].toBigInt();
  }
}

export class WithdrawCall extends ethereum.Call {
  get inputs(): WithdrawCall__Inputs {
    return new WithdrawCall__Inputs(this);
  }

  get outputs(): WithdrawCall__Outputs {
    return new WithdrawCall__Outputs(this);
  }
}

export class WithdrawCall__Inputs {
  _call: WithdrawCall;

  constructor(call: WithdrawCall) {
    this._call = call;
  }
}

export class WithdrawCall__Outputs {
  _call: WithdrawCall;

  constructor(call: WithdrawCall) {
    this._call = call;
  }
}