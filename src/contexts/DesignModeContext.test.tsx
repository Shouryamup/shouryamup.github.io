import { describe, it, expect, beforeEach } from "vitest";
import { renderHook, act } from "@testing-library/react";
import { DesignModeProvider, useDesignMode } from "./DesignModeContext";

describe("DesignModeContext", () => {
  beforeEach(() => {
    localStorage.clear();
  });

  it("defaults to code mode when nothing is stored", () => {
    const { result } = renderHook(() => useDesignMode(), { wrapper: DesignModeProvider });
    expect(result.current.mode).toBe("code");
  });

  it("persists the mode to localStorage when toggled", () => {
    const { result } = renderHook(() => useDesignMode(), { wrapper: DesignModeProvider });

    act(() => result.current.toggleMode());

    expect(result.current.mode).toBe("live");
    expect(localStorage.getItem("design-mode")).toBe("live");
  });

  it("restores a previously persisted mode on mount", () => {
    localStorage.setItem("design-mode", "live");

    const { result } = renderHook(() => useDesignMode(), { wrapper: DesignModeProvider });

    expect(result.current.mode).toBe("live");
  });
});
