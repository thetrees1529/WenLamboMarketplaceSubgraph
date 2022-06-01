import { BigInt } from "@graphprotocol/graph-ts"
import {
  BuyItNow,
  Cancelled,
  FeeSet,
  FeesSplit,
  FeesTaken,
  Initialised,
  Initialised1,
  Listed,
  OwnershipTransferred,
  PayeeAdded,
  PayeesDeleted,
  Payment,
  PriceEdited,
  Sold
} from "../generated/BuyItNow/BuyItNow"
import { ExampleEntity } from "../generated/schema"

export function handleCancelled(event: Cancelled): void {
  // Entities can be loaded from the store using a string ID; this ID
  // needs to be unique across all entities of the same type
  let entity = ExampleEntity.load(event.transaction.from.toHex())

  // Entities only exist after they have been saved to the store;
  // `null` checks allow to create entities on demand
  if (!entity) {
    entity = new ExampleEntity(event.transaction.from.toHex())

    // Entity fields can be set using simple assignments
    entity.count = BigInt.fromI32(0)
  }

  // BigInt and BigDecimal math are supported
  entity.count = entity.count + BigInt.fromI32(1)

  // Entity fields can be set based on event parameters
  entity.listingId = event.params.listingId

  // Entities can be written to the store with `.save()`
  entity.save()

  // Note: If a handler doesn't require existing field values, it is faster
  // _not_ to load the entity from the store. Instead, create it fresh with
  // `new Entity(...)`, set the fields that should be updated and save the
  // entity back to the store. Fields that were not set or unset remain
  // unchanged, allowing for partial updates to be applied.

  // It is also possible to access smart contracts from mappings. For
  // example, the contract that has emitted the event can be connected to
  // with:
  //
  // let contract = Contract.bind(event.address)
  //
  // The following functions can then be called on this contract to access
  // state variables and other data:
  //
  // - contract.onERC721Received(...)
  // - contract.owner(...)
}

export function handleFeeSet(event: FeeSet): void {}

export function handleFeesSplit(event: FeesSplit): void {}

export function handleFeesTaken(event: FeesTaken): void {}

export function handleInitialised(event: Initialised): void {}

export function handleInitialised1(event: Initialised1): void {}

export function handleListed(event: Listed): void {}

export function handleOwnershipTransferred(event: OwnershipTransferred): void {}

export function handlePayeeAdded(event: PayeeAdded): void {}

export function handlePayeesDeleted(event: PayeesDeleted): void {}

export function handlePayment(event: Payment): void {}

export function handlePriceEdited(event: PriceEdited): void {}

export function handleSold(event: Sold): void {}
