import { Address, BigInt } from "@graphprotocol/graph-ts"
import {
  Cancelled,
  FeeSet,
  Listed,
  PriceEdited,
  Sold
} from "../generated/BuyItNow/IBuyItNow"
import { Lambo, Listing, NewFee, User } from "../generated/schema"

export function handleListed(event: Listed): void {
  const listing = new Listing(event.params.listingId.toString())
  listing.lambo = getOrCreateLambo(event.params.tokenId).id
  listing.price = event.params.price
  listing.expiresAt = event.params.expiresAt
  listing.seller = getOrCreateUser(event.params.seller).id
  listing.cancelled = false
  listing.save()
}

export function handlePriceEdited(event: PriceEdited): void {
  const listing = getListing(event.params.listingId)!
  listing.price = event.params.newPrice
  listing.save()
}

export function handleSold(event: Sold): void {
  const listing = getListing(event.params.listingId)!
  listing.soldTo = getOrCreateUser(event.params.buyer).id
  listing.feesTaken = event.params.feesTaken
  listing.save()
}

export function handleCancelled(event: Cancelled): void {
  const listing = getListing(event.params.listingId)!
  listing.cancelled = true
  listing.save()
}

export function handleFeeSet(event: FeeSet): void {
  const newFee = new NewFee(`${event.transaction.hash.toHexString()} ${event.transactionLogIndex}`)
  newFee.newFeeNumerator = event.params.fee.numerator
  newFee.newFeeDenominator = event.params.fee.denominator
  newFee.blockNumber = event.block.number
  newFee.save()
}

function getOrCreateLambo(tokenId: BigInt): Lambo {
  const id = tokenId.toString()
  let lambo = Lambo.load(id)
  if(!lambo) {
    lambo = new Lambo(id)
    lambo.save()
  }
  return lambo
}

function getOrCreateUser(address: Address): User {
  const id = address.toHexString()
  let user = User.load(id)
  if(!user) {
    user = new User(id)
    user.save()
  }
  return user
}

function getListing(listingId: BigInt): Listing | null {
  return Listing.load(listingId.toString())
}
