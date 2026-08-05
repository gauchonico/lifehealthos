"use client";

import { useState } from "react";
import { Plus, Trash2 } from "lucide-react";
import type { ObjectListItemField } from "@/lib/workspaceCollections";

type Item = Record<string, string>;

function emptyItem(itemFields: ObjectListItemField[]): Item {
  return Object.fromEntries(itemFields.map((f) => [f.name, ""]));
}

export default function ObjectListField({
  name,
  label,
  itemFields,
  defaultValue,
}: {
  name: string;
  label: string;
  itemFields: ObjectListItemField[];
  defaultValue?: unknown;
}) {
  const initial: Item[] = Array.isArray(defaultValue)
    ? defaultValue.map((entry) => Object.fromEntries(itemFields.map((f) => [f.name, String((entry as Record<string, unknown>)?.[f.name] ?? "")])))
    : [];

  const [items, setItems] = useState<Item[]>(initial);

  const update = (index: number, fieldName: string, value: string) => {
    setItems((prev) => prev.map((item, i) => (i === index ? { ...item, [fieldName]: value } : item)));
  };

  const remove = (index: number) => {
    setItems((prev) => prev.filter((_, i) => i !== index));
  };

  const add = () => {
    setItems((prev) => [...prev, emptyItem(itemFields)]);
  };

  return (
    <div>
      <label className="mb-2 block text-sm font-medium text-slate-600">{label}</label>
      <input type="hidden" name={name} value={JSON.stringify(items)} />

      <div className="space-y-3">
        {items.map((item, index) => (
          <div key={index} className="rounded-xl border border-slate-200 p-4">
            <div className="mb-2 flex items-center justify-between">
              <span className="text-xs font-semibold uppercase tracking-wide text-slate-400">#{index + 1}</span>
              <button type="button" onClick={() => remove(index)} className="inline-flex items-center gap-1 text-xs font-semibold text-red-600 hover:text-red-700">
                <Trash2 className="h-3.5 w-3.5" /> Remove
              </button>
            </div>
            <div className="space-y-2">
              {itemFields.map((f) =>
                f.multiline ? (
                  <textarea
                    key={f.name}
                    rows={2}
                    placeholder={f.label}
                    value={item[f.name] ?? ""}
                    onChange={(e) => update(index, f.name, e.target.value)}
                    className="w-full rounded-lg border border-slate-200 px-3 py-2 text-sm focus:border-teal-300 focus:outline-none focus:ring-2 focus:ring-teal-500/20"
                  />
                ) : (
                  <input
                    key={f.name}
                    type="text"
                    placeholder={f.label}
                    value={item[f.name] ?? ""}
                    onChange={(e) => update(index, f.name, e.target.value)}
                    className="w-full rounded-lg border border-slate-200 px-3 py-2 text-sm focus:border-teal-300 focus:outline-none focus:ring-2 focus:ring-teal-500/20"
                  />
                ),
              )}
            </div>
          </div>
        ))}
      </div>

      <button
        type="button"
        onClick={add}
        className="mt-3 inline-flex items-center gap-1.5 text-xs font-semibold text-teal-600 hover:text-teal-700"
      >
        <Plus className="h-3.5 w-3.5" /> Add {label.replace(/s$/, "")}
      </button>
    </div>
  );
}
