// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  TypedMap,
  Entity,
  Value,
  ValueKind,
  store,
  Bytes,
  BigInt,
  BigDecimal
} from "@graphprotocol/graph-ts";

export class Dao extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));

    this.set("summoner", Value.fromBytes(Bytes.empty()));
    this.set("summoningTime", Value.fromBigInt(BigInt.zero()));
    this.set("createdAt", Value.fromString(""));
    this.set("periodDuration", Value.fromBigInt(BigInt.zero()));
    this.set("votingPeriodLength", Value.fromBigInt(BigInt.zero()));
    this.set("gracePeriodLength", Value.fromBigInt(BigInt.zero()));
    this.set("proposalDeposit", Value.fromBigInt(BigInt.zero()));
    this.set("dilutionBound", Value.fromBigInt(BigInt.zero()));
    this.set("processingReward", Value.fromBigInt(BigInt.zero()));
    this.set("totalShares", Value.fromBigInt(BigInt.zero()));
    this.set("totalLoot", Value.fromBigInt(BigInt.zero()));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save Dao entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        `Entities of type Dao must have an ID of type String but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set("Dao", id.toString(), this);
    }
  }

  static load(id: string): Dao | null {
    return changetype<Dao | null>(store.get("Dao", id));
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get version(): string | null {
    let value = this.get("version");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toString();
    }
  }

  set version(value: string | null) {
    if (!value) {
      this.unset("version");
    } else {
      this.set("version", Value.fromString(<string>value));
    }
  }

  get summoner(): Bytes {
    let value = this.get("summoner");
    return value!.toBytes();
  }

  set summoner(value: Bytes) {
    this.set("summoner", Value.fromBytes(value));
  }

  get newContract(): string | null {
    let value = this.get("newContract");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toString();
    }
  }

  set newContract(value: string | null) {
    if (!value) {
      this.unset("newContract");
    } else {
      this.set("newContract", Value.fromString(<string>value));
    }
  }

  get deleted(): boolean {
    let value = this.get("deleted");
    return value!.toBoolean();
  }

  set deleted(value: boolean) {
    this.set("deleted", Value.fromBoolean(value));
  }

  get summoningTime(): BigInt {
    let value = this.get("summoningTime");
    return value!.toBigInt();
  }

  set summoningTime(value: BigInt) {
    this.set("summoningTime", Value.fromBigInt(value));
  }

  get createdAt(): string {
    let value = this.get("createdAt");
    return value!.toString();
  }

  set createdAt(value: string) {
    this.set("createdAt", Value.fromString(value));
  }

  get periodDuration(): BigInt {
    let value = this.get("periodDuration");
    return value!.toBigInt();
  }

  set periodDuration(value: BigInt) {
    this.set("periodDuration", Value.fromBigInt(value));
  }

  get votingPeriodLength(): BigInt {
    let value = this.get("votingPeriodLength");
    return value!.toBigInt();
  }

  set votingPeriodLength(value: BigInt) {
    this.set("votingPeriodLength", Value.fromBigInt(value));
  }

  get gracePeriodLength(): BigInt {
    let value = this.get("gracePeriodLength");
    return value!.toBigInt();
  }

  set gracePeriodLength(value: BigInt) {
    this.set("gracePeriodLength", Value.fromBigInt(value));
  }

  get proposalDeposit(): BigInt {
    let value = this.get("proposalDeposit");
    return value!.toBigInt();
  }

  set proposalDeposit(value: BigInt) {
    this.set("proposalDeposit", Value.fromBigInt(value));
  }

  get dilutionBound(): BigInt {
    let value = this.get("dilutionBound");
    return value!.toBigInt();
  }

  set dilutionBound(value: BigInt) {
    this.set("dilutionBound", Value.fromBigInt(value));
  }

  get processingReward(): BigInt {
    let value = this.get("processingReward");
    return value!.toBigInt();
  }

  set processingReward(value: BigInt) {
    this.set("processingReward", Value.fromBigInt(value));
  }

  get guildBankAddress(): Bytes | null {
    let value = this.get("guildBankAddress");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toBytes();
    }
  }

  set guildBankAddress(value: Bytes | null) {
    if (!value) {
      this.unset("guildBankAddress");
    } else {
      this.set("guildBankAddress", Value.fromBytes(<Bytes>value));
    }
  }

  get guildBankBalanceV1(): BigInt | null {
    let value = this.get("guildBankBalanceV1");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toBigInt();
    }
  }

  set guildBankBalanceV1(value: BigInt | null) {
    if (!value) {
      this.unset("guildBankBalanceV1");
    } else {
      this.set("guildBankBalanceV1", Value.fromBigInt(<BigInt>value));
    }
  }

  get totalShares(): BigInt {
    let value = this.get("totalShares");
    return value!.toBigInt();
  }

  set totalShares(value: BigInt) {
    this.set("totalShares", Value.fromBigInt(value));
  }

  get totalLoot(): BigInt {
    let value = this.get("totalLoot");
    return value!.toBigInt();
  }

  set totalLoot(value: BigInt) {
    this.set("totalLoot", Value.fromBigInt(value));
  }

  get v22Setup(): boolean {
    let value = this.get("v22Setup");
    return value!.toBoolean();
  }

  set v22Setup(value: boolean) {
    this.set("v22Setup", Value.fromBoolean(value));
  }

  get spamPreventionAddress(): Bytes | null {
    let value = this.get("spamPreventionAddress");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toBytes();
    }
  }

  set spamPreventionAddress(value: Bytes | null) {
    if (!value) {
      this.unset("spamPreventionAddress");
    } else {
      this.set("spamPreventionAddress", Value.fromBytes(<Bytes>value));
    }
  }

  get spamPreventionAmount(): BigInt | null {
    let value = this.get("spamPreventionAmount");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toBigInt();
    }
  }

  set spamPreventionAmount(value: BigInt | null) {
    if (!value) {
      this.unset("spamPreventionAmount");
    } else {
      this.set("spamPreventionAmount", Value.fromBigInt(<BigInt>value));
    }
  }
}

export class MemberUri extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save MemberUri entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        `Entities of type MemberUri must have an ID of type String but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set("MemberUri", id.toString(), this);
    }
  }

  static load(id: string): MemberUri | null {
    return changetype<MemberUri | null>(store.get("MemberUri", id));
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get members(): Array<string> | null {
    let value = this.get("members");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toStringArray();
    }
  }

  set members(value: Array<string> | null) {
    if (!value) {
      this.unset("members");
    } else {
      this.set("members", Value.fromStringArray(<Array<string>>value));
    }
  }
}

export class Member extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));

    this.set("createdAt", Value.fromString(""));
    this.set("dao", Value.fromString(""));
    this.set("memberAddress", Value.fromBytes(Bytes.empty()));
    this.set("delegateKey", Value.fromBytes(Bytes.empty()));
    this.set("shares", Value.fromBigInt(BigInt.zero()));
    this.set("loot", Value.fromBigInt(BigInt.zero()));
    this.set("exists", Value.fromBoolean(false));
    this.set("tokenTribute", Value.fromBigInt(BigInt.zero()));
    this.set("didRagequit", Value.fromBoolean(false));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save Member entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        `Entities of type Member must have an ID of type String but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set("Member", id.toString(), this);
    }
  }

  static load(id: string): Member | null {
    return changetype<Member | null>(store.get("Member", id));
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get createdAt(): string {
    let value = this.get("createdAt");
    return value!.toString();
  }

  set createdAt(value: string) {
    this.set("createdAt", Value.fromString(value));
  }

  get dao(): string {
    let value = this.get("dao");
    return value!.toString();
  }

  set dao(value: string) {
    this.set("dao", Value.fromString(value));
  }

  get memberAddress(): Bytes {
    let value = this.get("memberAddress");
    return value!.toBytes();
  }

  set memberAddress(value: Bytes) {
    this.set("memberAddress", Value.fromBytes(value));
  }

  get delegateKey(): Bytes {
    let value = this.get("delegateKey");
    return value!.toBytes();
  }

  set delegateKey(value: Bytes) {
    this.set("delegateKey", Value.fromBytes(value));
  }

  get shares(): BigInt {
    let value = this.get("shares");
    return value!.toBigInt();
  }

  set shares(value: BigInt) {
    this.set("shares", Value.fromBigInt(value));
  }

  get loot(): BigInt {
    let value = this.get("loot");
    return value!.toBigInt();
  }

  set loot(value: BigInt) {
    this.set("loot", Value.fromBigInt(value));
  }

  get exists(): boolean {
    let value = this.get("exists");
    return value!.toBoolean();
  }

  set exists(value: boolean) {
    this.set("exists", Value.fromBoolean(value));
  }

  get tokenTribute(): BigInt {
    let value = this.get("tokenTribute");
    return value!.toBigInt();
  }

  set tokenTribute(value: BigInt) {
    this.set("tokenTribute", Value.fromBigInt(value));
  }

  get didRagequit(): boolean {
    let value = this.get("didRagequit");
    return value!.toBoolean();
  }

  set didRagequit(value: boolean) {
    this.set("didRagequit", Value.fromBoolean(value));
  }

  get proposedToKick(): boolean {
    let value = this.get("proposedToKick");
    return value!.toBoolean();
  }

  set proposedToKick(value: boolean) {
    this.set("proposedToKick", Value.fromBoolean(value));
  }

  get kicked(): boolean {
    let value = this.get("kicked");
    return value!.toBoolean();
  }

  set kicked(value: boolean) {
    this.set("kicked", Value.fromBoolean(value));
  }

  get jailed(): BigInt | null {
    let value = this.get("jailed");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toBigInt();
    }
  }

  set jailed(value: BigInt | null) {
    if (!value) {
      this.unset("jailed");
    } else {
      this.set("jailed", Value.fromBigInt(<BigInt>value));
    }
  }
}
