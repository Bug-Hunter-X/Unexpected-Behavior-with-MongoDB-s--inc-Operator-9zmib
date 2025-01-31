# MongoDB $inc Operator Bug

This repository demonstrates a common error when using the `$inc` operator in MongoDB. The `$inc` operator is used to increment a numerical field by a specified value. However, if the field doesn't exist or isn't a number, unexpected results can occur. The provided code sample demonstrates this issue, and a solution is provided to handle these cases effectively.

## Bug Description

The original code attempts to increment a field using `$inc` without checking for its existence or type. This can result in the update failing or producing unintended consequences if the field is missing or doesn't hold a number.  The solution addresses this by ensuring the field exists and is numeric before incrementing it.

## Solution

The solution demonstrates using the `$setOnInsert` operator in conjunction with `$inc` to safely handle scenarios where the field might not already exist.