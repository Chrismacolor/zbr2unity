#!/usr/bin/env python3

import argparse
import sys

def main():
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument('file', help='file to write')
    args = parser.parse_args()

    f = open(args.file, 'w+')

    while True:
        f.write(sys.stdin.readline())

if __name__ == '__main__':
    main()
