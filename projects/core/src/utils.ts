import {PI} from "@myproj/common/constants";

export * from "@myproj/common/utils";

export function circumference(r: number): number {
    return 2 * PI * r;
}