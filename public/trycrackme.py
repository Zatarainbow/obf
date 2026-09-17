#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
TryCrackMe Challenge v1.0
Target: Find the valid license key to reveal the secret flag!
Can you decompile and reverse engineer this algorithm?
"""
import hashlib
import sys

SECRET_SALT = "MEOWT_SEC_2026"

def verify_license(license_key: str) -> bool:
    """Validate user license key using multi-round hashing and checksum."""
    parts = license_key.strip().split("-")
    if len(parts) != 4:
        return False
    
    prefix, user_id, tier, checksum = parts
    if prefix != "MEOW" or tier not in ("PRO", "VIP", "DEV"):
        return False
    
    # Calculate expected integrity checksum
    raw_payload = f"{user_id}:{tier}:{SECRET_SALT}".encode("utf-8")
    expected = hashlib.sha256(raw_payload).hexdigest()[:8].upper()
    return checksum == expected

def unlock_payload(license_key: str):
    """Decrypt the secret flag upon valid license."""
    print("\n" + "=" * 50)
    print("  [+] LICENSE ACCEPTED! Access Granted.")
    print("  [+] Developer Flag: FLAG{m30wt_c4n_y0u_d3c0mp1l3_m3_2026}")
    print("=" * 50 + "\n")

def main():
    print("=" * 50)
    print("   MEOWT V5.2 - SECURITY CRACKME CHALLENGE")
    print("=" * 50)
    key = input("Enter License Key (Format: MEOW-USER-TIER-HASH): ").strip()
    if verify_license(key):
        unlock_payload(key)
    else:
        print("\n[-] ACCESS DENIED: Invalid license key or tampered binary!")
        sys.exit(1)

if __name__ == "__main__":
    main()
