import React from "react";
import T from "prop-types";
import Flexbox from "commons/components/Flexbox";
import Typography from "commons/components/Typography";
import RadioButtonWrap from "commons/components/RadioButtonWrap";
import NumberStepper from "commons/components/NumberStepper";

function Filter({
  type,
  label,
  value,
  options = [],
  min = 1,
  max = 100,
  step = 1,
  content,
  onChange,
}) {
  return (
    <Flexbox flexDirection="column" padding="16px" gap={10}>
      <Typography variant="h4">{label}</Typography>

      {type === "select" && (
        <Flexbox gap={12} alignItems="flex-start" flexWrap="wrap">
          {options.map((option) => (
            <RadioButtonWrap
              key={option.value}
              label={option.label}
              isActive={value?.includes(option.value)}
              onClick={() => onChange(option.value)}
            />
          ))}
        </Flexbox>
      )}

      {type === "bool" && (
        <Flexbox gap={12} alignItems="flex-start" flexWrap="wrap">
          <RadioButtonWrap
            label="Tak"
            isActive={!!value}
            onClick={() => onChange(true)}
          />
          <RadioButtonWrap
            label="Nie"
            isActive={!value}
            onClick={() => onChange(false)}
          />
        </Flexbox>
      )}

      {type === "number" && (
        <Flexbox gap={12} alignItems="flex-start">
          <NumberStepper
            min={min}
            max={max}
            step={step}
            value={value}
            onChange={onChange}
          />
        </Flexbox>
      )}

      {type === "custom" && <>{content}</>}
    </Flexbox>
  );
}

Filter.propTypes = {
  type: T.oneOf(["select", "bool", "number", "custom"]).isRequired,
  label: T.string.isRequired,
  value: T.any,
  options: T.array,
  min: T.number,
  max: T.number,
  step: T.number,
  content: T.oneOfType([T.object, T.string, T.node]),
  onChange: T.func,
  validate: T.func,
};

export default Filter;